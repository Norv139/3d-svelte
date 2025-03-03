<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

    /** @type {HTMLDivElement} */
    let container;
    /** @type {THREE.Scene} */
    let scene
    /** @type {THREE.Camera} */
    let camera
    /** @type {THREE.WebGLRenderer} */
    let renderer
    /** @type {OrbitControls} */
    let controls
    /** @type {THREE.Object3D<THREE.Object3DEventMap>} */
    let ambientLight
    /** @type {THREE.Object3D<THREE.Object3DEventMap>} */
    let directionalLight
    /** @type {THREE.Object3D<THREE.Object3DEventMap>} */
    let lightHelper;
    /** @type {THREE.Object3D<THREE.Object3DEventMap> | null} */
    let modelMesh = null;

    let loadProgress = 0;
    let errorMessage = '';
    
    // Reactive states
    let ambientIntensity = 0.5;
    let ambientColor = '#c5c5c5';
    let directionalIntensity = 0.7;
    let directionalColor = '#ffffff';
    let lightX = 50;
    let lightY = 50;
    let lightZ = 50;
    let modelColor = '#0080ff';

    function initScene() {
        // Scene setup
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xeeeeee);

        // Camera
        camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
        camera.position.set(0, 0, 150);

        // Renderer
        renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            preserveDrawingBuffer: true
        });
        renderer.setSize(600, 600);
        container.appendChild(renderer.domElement);

        initLights();
        initControls();
        animate();
    }

    function initLights() {
        // Ambient Light
        ambientLight = new THREE.AmbientLight(ambientColor, ambientIntensity);
        scene.add(ambientLight);

        // Directional Light
        directionalLight = new THREE.DirectionalLight(directionalColor, directionalIntensity);
        directionalLight.position.set(lightX, lightY, lightZ);
        scene.add(directionalLight);

        // Light Helper
        lightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
        scene.add(lightHelper);
        
        // Добавляем тени (опционально)
        directionalLight.castShadow = true;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    function initControls() {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
    }

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    // @ts-ignore
    function handleFileUpload(e) {
        errorMessage = '';
        const file = e.target.files[0];
        console.log('Выбран файл:', file); // Отладка
        
        if (!file || !file.name.endsWith('.stl')) {
            errorMessage = 'Выберите файл с расширением .stl';
            return;
        }

        const reader = new FileReader();
        
        reader.onloadstart = () => loadProgress = 10;
        reader.onprogress = (e) => {
            if (e.lengthComputable) {
                loadProgress = Math.round((e.loaded / e.total) * 90);
            }
        };

        reader.onload = (event) => {
            loadProgress = 100;
            // @ts-ignore
            console.log('Данные файла получены:', event.target.result); // Отладка
            try {
                // @ts-ignore
                loadSTLModel(event.target.result);
            } catch (err) {
                // @ts-ignore
                errorMessage = `Ошибка загрузки: ${err.message}`;
                console.error(err);
            }
            setTimeout(() => loadProgress = 0, 1000);
        };

        reader.onerror = (error) => {
            errorMessage = 'Ошибка чтения файла';
            console.error('FileReader error:', error);
        };

        reader.readAsArrayBuffer(file);
    }

    /**
     * @param { ArrayBuffer } data
     */
     function loadSTLModel(data) {
        try {
            // Очистка предыдущей модели
            if (modelMesh) {
                scene.remove(modelMesh);
                // @ts-ignore
                modelMesh.geometry.dispose();
                // @ts-ignore
                modelMesh.material.dispose();
                modelMesh = null;
                console.log('Старая модель удалена'); // Отладка
            }

            const loader = new STLLoader();
            console.log('Начало парсинга STL'); // Отладка
            const geometry = loader.parse(data);
            console.log('STL успешно распарсен', geometry); // Отладка

            const material = new THREE.MeshPhongMaterial({
                color: modelColor,
                specular: 0x111111,
                shininess: 200,
                side: THREE.DoubleSide
            });

            modelMesh = new THREE.Mesh(geometry, material);
            scene.add(modelMesh);
            console.log('Модель добавлена в сцену'); // Отладка

            // Центрирование камеры
            const box = new THREE.Box3().setFromObject(modelMesh);
            const center = box.getCenter(new THREE.Vector3());
            modelMesh.position.sub(center);
            
            // Настройка камеры
            const size = box.getSize(new THREE.Vector3()).length();
            camera.position.copy(center).add(new THREE.Vector3(0, 0, size * 1.5));
            camera.lookAt(center);
            controls.update();
            console.log('Камера настроена'); // Отладка

        } catch (error) {
            console.error('Critical load error:', error);
            // @ts-ignore
            throw new Error(`Неверный формат STL файла: ${error.message}`);
        }
    }

    $: {
        // Обновление Ambient Light
        // @ts-ignore
        if (ambientLight) {
            ambientLight.intensity = ambientIntensity;
            ambientLight.color.set(ambientColor);
        }

        // Обновление Directional Light
        // @ts-ignore
        if (directionalLight) {
            directionalLight.intensity = directionalIntensity;
            directionalLight.color.set(directionalColor);
            directionalLight.position.set(lightX, lightY, lightZ);
            // @ts-ignore
            if (lightHelper) {
                lightHelper.update();
            }
        }

        // Обновление цвета модели
        if (modelMesh) {
            // @ts-ignore
            modelMesh.material.color.set(modelColor);
        }
    }

    function resetLightSettings() {
        ambientIntensity = 0.5;
        ambientColor = '#ffffff';
        directionalIntensity = 0.7;
        directionalColor = '#ffffff';
        lightX = 50;
        lightY = 50;
        lightZ = 50;
    }

    async function savePreview() {
        if (!modelMesh) {
            alert('Сначала загрузите модель!');
            return;
        }

        const tempRenderer = new THREE.WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true,
            alpha: true
        });
        tempRenderer.setSize(1200, 1200);

        const tempScene = new THREE.Scene();
        const tempCamera = camera.clone();

        scene.children.forEach(obj => {
            // @ts-ignore
            if (obj.isLight || obj === modelMesh) {
                const clone = obj.clone();
                // @ts-ignore
                if (clone.isMesh) {
                    // @ts-ignore
                    clone.material = clone.material.clone();
                    // @ts-ignore
                    clone.material.transparent = false;
                }
                tempScene.add(clone);
            }
        });

        tempRenderer.render(tempScene, tempCamera);
        
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 1200;
        const ctx = canvas.getContext('2d');
        // @ts-ignore
        ctx.drawImage(tempRenderer.domElement, 0, 0);

        const link = document.createElement('a');
        link.download = 'preview.png';
        link.href = canvas.toDataURL();
        link.click();

        tempRenderer.dispose();
        canvas.remove();
    }

    onMount(() => {
        initScene();
        return () => {
            renderer.dispose();
            scene.clear();
        };
    });

    onDestroy(() => {
        if (renderer) renderer.dispose();
    });
</script>

<div class="container">
    <!-- Вывод ошибок -->
    

    <div class="container-model">
        {#if errorMessage}
            <div class="error">{errorMessage}</div>
        {/if}

        <div bind:this={container} class="viewer-container" ></div>

        <div class="control-panel">
            <div class="control-section">
                <h3>File Settings</h3> 

                <div class="loading-container">
                    <input 
                        type="file" 
                        accept=".stl" 
                        on:change={handleFileUpload}
                        class="file-input"
                    >
                    <div class="loader" style={loadProgress > 0 ?  "display: block;" : "visibility: hidden"} >
                        <progress value={loadProgress} max="100"></progress>
                        {loadProgress}%
                    </div>
                </div>

                <div class="slider-container">
                    <div>Color model: </div>
                    <input type="color" bind:value={modelColor}>
                </div>

                <div class="slider-container">
                    <button on:click={savePreview}>Save as PNG</button>
                </div>
            </div>

            <!-- Ambient Light Controls -->
            

            <!-- Directional Light -->
            <div class="control-section">
                <h3>Light Settings</h3>

                <button on:click={resetLightSettings} class="btn">Reset Lights</button>

                <div class="control-part">
                    <h4>Directional Light</h4>

                    <div class="slider-container">
                        <div>X: {lightX}</div>
                        <input type="range" bind:value={lightX} min="-200" max="200">
                        
                    </div>
                    <div class="slider-container">
                        <div>Y: {lightY}</div>
                        <input type="range" bind:value={lightY} min="-200" max="200">
                        
                    </div>
                    <div class="slider-container">
                        <div>Z: {lightZ}</div>
                        <input type="range" bind:value={lightZ} min="-200" max="200">
                        
                    </div>
                </div>
                <div class="control-part">
                    <h4>Ambient Light</h4>

                    <div class="slider-container">
                        <div>Intensity: {directionalIntensity}</div>
                        <input type="range" bind:value={directionalIntensity} min="0" max="2" step="0.1">
                    </div>
    
                    <div class="slider-container">
                        <div>Color: </div>
                        <input type="color" bind:value={directionalColor}>
                    </div>
    

                    <h4>Shadow Light</h4>
                    <div class="slider-container">
                        <div>Intensity: {ambientIntensity}</div>
                        <input type="range" bind:value={ambientIntensity} min="0" max="1" step="0.1">
                    </div>
                    <div class="slider-container">
                        <div>Color: </div>
                        <input type="color" bind:value={ambientColor}>
                    </div>
                </div>
            </div>

            
        </div>

    </div>

</div>

<style>
    .btn {
        margin: 5px 0;
    }
    .container { display: grid }

    .container-model { display: flex;     margin: 0 auto; }

    .viewer-container { 
        width: 600px; 
        height: 600px;
        border: 1px solid #ccc;
    }
    .control-panel {
        display: block;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        /* padding: 15px; */
        border: 1px solid #ddd;
        background: #f8f8f8;
    }
    .control-section {
        padding: 10px 0 0 10px;
        border: 1px solid #eee;
    }
    .control-part {
        margin: 10px 0;
    }
    .slider-container {
        margin: 8px 0;
        display: grid;
        grid-template-columns: 120px auto;
    }
    .loading-container {
        margin: 8px 0;
        display: block;
        grid-template-columns: auto auto;
    }
    .slider-container div {
        min-width: 60px;
    }
    input[type="range"] {
        width: 180px;
    }
    control-section h1, h2, h3, h4 {
        margin-top: 0px;
    }

</style>