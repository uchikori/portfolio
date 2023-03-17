import React, { useEffect, useMemo, useRef } from "react";
import * as noise from "simplenoise";

export const Canvas = React.memo(() => {
  //Canvasアニメーション
  const canvas = useRef(null);
  const lineNum = useMemo(() => 150, []);
  const segmentNum = useMemo(() => 150, []);
  useEffect(() => {
    const canvasEl = canvas.current;
    const canvasContext = canvasEl.getContext("2d");

    noise.seed(Math.random());

    let stageW = window.innerWidth * devicePixelRatio;
    let stageH = window.innerHeight * devicePixelRatio;

    //画面がリサイズされたとき、resize関数を流す
    window.addEventListener("resize", resize);

    //アニメーション描画の設定
    function draw(time) {
      //画面をリセット
      canvasContext.clearRect(0, 0, stageW, stageH);

      canvasContext.lineWidth = 1; //線の太さ
      canvasContext.strokeStyle = "white";
      const amplitude = stageH / 3; //振幅の大きさ

      //0からlineNum-1までの整数が順番に並んだ配列を得る
      [...Array(lineNum).keys()].forEach((j) => {
        // const coefficient = 50 + j;
        canvasContext.beginPath(); //線の開始

        const h = Math.round((j / lineNum) * 60) + 275;
        const s = 100;
        const l = Math.round((j / lineNum) * 47);

        canvasContext.strokeStyle = `hsl(${h}, ${s}%, ${l}%)`;

        [...Array(segmentNum).keys()].forEach(function (i) {
          const x = (i / (segmentNum - 1)) * stageW;
          const px = i / (50 + j); //水平方向の距離
          const py = j / 50 + time; //時間
          const y = amplitude * noise.perlin2(px, py) + stageH / 2; //求めたいY座標=振幅*乱数（パーリンノイズ）

          if (i === 0) {
            canvasContext.moveTo(x, y); //開始点
          } else {
            canvasContext.lineTo(x, y); //終了点
          }
        });
        canvasContext.stroke(); //線を描く
      });
    }

    //アニメーションのタイミング
    function tick() {
      requestAnimationFrame(tick);
      const time = Date.now() / 2000;
      draw(time);
    }

    //リサイズ時
    function resize() {
      stageW = window.innerWidth * devicePixelRatio;
      stageH = window.innerHeight * devicePixelRatio;

      canvasEl.width = stageW;
      canvasEl.height = stageH;
    }

    resize();
    tick();
  });
  return (
    <figure className="slide__figure">
      <canvas
        id="siteTopAnimation"
        ref={canvas}
        className="slide__img"
        style={{ background: "#050523" }}
      ></canvas>
    </figure>
  );
});
