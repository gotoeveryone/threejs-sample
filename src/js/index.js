import * as THREE from "three";

const init = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // 立方体ジオメトリの作成
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // メッシュの表面の質感を定義
  const material = new THREE.MeshPhongMaterial({
    color: "#fed",
  });
  const mesh = new THREE.Mesh(geometry, material);
  // X軸、Y軸の回転
  mesh.rotation.x = Math.PI * 0.2;
  mesh.rotation.y = Math.PI * 0.25;

  // ライトの作成
  const light = new THREE.PointLight("#def", 1);
  // ライトを手前右上に移動
  light.position.x = 0.5;
  light.position.y = 0.5;
  light.position.z = 2.5;

  // シーン（レンダリングするオブジェクトのグループ）の作成
  const scene = new THREE.Scene();
  scene.add(mesh);
  scene.add(light);

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.z = 5;

  // カメラで撮影したシーンを canvas 要素にレンダリングするための設定
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("canvas"),
    antialias: true
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);;
  renderer.render(scene, camera);
};

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
