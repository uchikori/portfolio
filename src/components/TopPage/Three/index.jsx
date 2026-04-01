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
    camera.position.set(0, 0, 10); // 画面に収まりやすくするため少し遠ざける

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

    let degreeX = 3;
    let degreeY = 3;

    const updateDegree = () => {
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;

      // ボックスのサイズ(1x1x1)を考慮してマージンを持たせる
      degreeX = visibleWidth / 2 - 1.2;
      degreeY = visibleHeight / 2 - 1.2;

      // 最小値を設定して、あまりに小さい画面でも動くようにする
      if (degreeX < 0.5) degreeX = 0.5;
      if (degreeY < 0.5) degreeY = 0.5;
    };

    updateDegree();

    // リサイズ処理
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      updateDegree();
    };

    window.addEventListener("resize", handleResize);

    //速度
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.04,
      (Math.random() - 0.5) * 0.04,
      (Math.random() - 0.5) * 0.04
    );

    let animationId;

    //フレームごとに実行されるループイベント
    function tick() {
      renderer.render(scene, camera);

      box.rotation.y += 0.01;
      box.rotation.x += 0.01;

      const boxPosition = box.position;

      boxPosition.add(velocity);

      // X方向の境界チェック
      if (Math.abs(boxPosition.x) > degreeX) {
        velocity.x *= -1;
        // 境界の外に出すぎないように補正
        boxPosition.x = Math.sign(boxPosition.x) * degreeX;
      }
      // Y方向の境界チェック
      if (Math.abs(boxPosition.y) > degreeY) {
        velocity.y *= -1;
        boxPosition.y = Math.sign(boxPosition.y) * degreeY;
      }
      // Z方向の境界（奥行きは固定でも良いが、カメラ位置に合わせて調整）
      if (Math.abs(boxPosition.z) > 5) {
        velocity.z *= -1;
        boxPosition.z = Math.sign(boxPosition.z) * 5;
      }

      animationId = window.requestAnimationFrame(tick);
    }
    //初回実行
    tick();

    return () => {
      // コンポーネントがアンマウントされたときに実行するクリーンアップ
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      cancelAnimationFrame(animationId);
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
