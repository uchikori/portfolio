import * as React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";
// import * as dat from "lil-gui";

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

    //画像読み込みを定義
    const loader = new THREE.TextureLoader();
    //マテリアルを作成
    const materials = [
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
    const box = new THREE.Mesh(geometry, materials);
    //シーンに追加
    scene.add(box);

    //平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    const light = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(light);

    const degree = 3;

    //速度
    const velocity = new THREE.Vector3(
      Math.random() * 0.02,
      Math.random() * 0.02,
      Math.random() * 0.02
    );
    //フレームごとに実行されるループイベント
    function tick() {
      renderer.render(scene, camera);

      box.rotation.y += 0.01;
      box.rotation.x += 0.01;

      const boxPosition = box.position;

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

      window.requestAnimationFrame(tick);
    }
    //初回実行
    tick();

    return () => {
      // コンポーネントがアンマウントされたときに実行するクリーンアップ
      renderer.dispose();
      cancelAnimationFrame(tick);
    };
  }, []);
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
