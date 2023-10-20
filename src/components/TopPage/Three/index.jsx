import * as React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";
import * as dat from "lil-gui";

export const Three = () => {
  const three = useRef(null);

  useEffect(() => {
    /**
     * デバッグ
     */
    // const gui = new dat.GUI();
    // gui.add(document, "title");
    //サイズを指定
    const width = window.innerWidth;
    const height = window.innerHeight;

    //レンダリング処理
    const renderer = new THREE.WebGLRenderer({
      canvas: three.current,
      alpha: true, //背景を透明にする
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    //シーンを作成
    const scene = new THREE.Scene();

    //カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100); //(画角, アスペクト比, 描画開始距離, 描画終了距離)
    camera.position.set(0, 0, 7); //カメラのセット位置（x, y, z）
    // camera.lookAt(new THREE.Vector3(0, 0, 0));

    // const cameraFolder = gui.addFolder("camera");
    // cameraFolder.add(camera.position, "x").min(-100).max(100).step(1);
    // cameraFolder.add(camera.position, "y").min(-100).max(100).step(1);
    // cameraFolder.add(camera.position, "z").min(-100).max(100).step(1);

    //コンテナーを作成
    const container = new THREE.Object3D();
    scene.add(container);
    //画像読み込みを定義
    const loader = new THREE.TextureLoader();
    //マテリアルを作成
    const material = [
      "texture-1.jpg",
      "texture-2.jpg",
      "texture-3.jpg",
      "texture-4.jpg",
      "texture-1.jpg",
      "texture-2.jpg",
    ].map(
      (texture) =>
        new THREE.MeshStandardMaterial({
          map: loader.load(`../../../images/${texture}`),
          side: THREE.DoubleSide,
        })
    );
    //BOXの形状を作成
    const geometry = new THREE.BoxGeometry(1, 1, 1); //球体
    //メッシュを作成
    const box = new THREE.Mesh(geometry, material);
    //シーンに追加
    scene.add(box);
    // const boxFolder = gui.addFolder("box");
    // boxFolder.add(box.position, "x").min(-100).max(100).step(1);
    // boxFolder.add(box.position, "y").min(-100).max(100).step(1);
    // boxFolder.add(box.position, "z").min(-100).max(100).step(1);

    //平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    const light = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(light);

    const degree = 3;
    let boxPosition = box.position;
    // //x方向の速度
    // let vx = Math.random();

    // //y方向の速度
    // let vy = Math.random();

    // //z方向の速度
    // let vz = Math.random();
    const velocity = new THREE.Vector3(
      Math.random() * 0.02,
      Math.random() * 0.02,
      Math.random() * 0.02
    );
    function tick() {
      box.rotation.y += 0.01;
      box.rotation.x += 0.01;

      boxPosition.add(velocity);
      if (Math.abs(boxPosition.x) > degree) {
        velocity.x *= -1;
      }
      if (Math.abs(boxPosition.y) > degree) {
        velocity.y *= -1;
      }
      if (Math.abs(boxPosition.z) > degree * 1.5) {
        velocity.z *= -1;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    //初回実行
    tick();
    //マイフレームごとに実行されるループイベント
    // function tick() {
    //   box.rotation.y += 0.01;
    //   box.rotation.x += 0.01;
    //   boxPosition.x += vx;
    //   boxPosition.y += vy;
    //   boxPosition.z += vz;
    //   // console.log(boxPosition);
    //   if (boxPosition.x > degree || boxPosition.x < -degree) {
    //     vx *= -1;
    //   }
    //   if (boxPosition.y > degree || boxPosition.y < -degree) {
    //     vy *= -1;
    //   }
    //   if (boxPosition.z > degree || boxPosition.z < -degree) {
    //     vz *= -1;
    //   }
    //   requestAnimationFrame(tick);

    //   //レンダリング
    //   renderer.render(scene, camera); //レンダリング（更新処理）
    // }
  });
  return (
    <canvas
      id="service-canvas"
      className="slide__img"
      ref={three}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1,
        background: "transparent",
      }}
    ></canvas>
  );
};
