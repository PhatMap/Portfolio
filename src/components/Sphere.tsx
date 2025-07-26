"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const texts: string[] = [
  "React",
  "TypeScript",
  "JavaScript",
  "NodeJS",
  "Express",
  "JWT",
  "Figma",
  "Git",
  "Netlify",
  "Heroku",
  "Angular",
  "Python",
  "Redux",
  "REST",
  "Cloudinary",
  "Firebase",
  "SCSS",
  "Shopify",
  "HTML",
];

const images: Record<string, string> = {
  React: "/icon-react.svg",
  TypeScript: "/icon-typescript.svg",
  JavaScript: "/icon-javascript.svg",
  NodeJS: "/icon-nodejs.svg",
  Express: "/icon-expressjs-dark.svg",
  Git: "/icon-github.svg",
  Netlify: "/icon-netlify.svg",
  Heroku: "/icon-heroku.svg",
  Figma: "/icon-figma.svg",
  Python: "/icon-python.svg",
  Redux: "/icon-redux.svg",
  Angular: "/icon-angularjs.svg",
  Cloudinary: "/icon-cloudinary.svg",
  Firebase: "/icon-firebase.svg",
  REST: "/icon-rest.svg",
  JWT: "/icon-jwt.svg",
  SCSS: "/icon-scss.svg",
  Shopify: "/icon-shopify.svg",
  HTML: "/icon-html.svg",
};

const computePosition = (idx: number, size: number) => {
  const phi = Math.acos(-1 + (2 * idx + 1) / texts.length);
  const theta = Math.sqrt(texts.length * Math.PI) * phi;

  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};

const createTag = (idx: number, text: string, size: number) => ({
  idx,
  text,
  opacity: 0,
  filter: "alpha(opacity=0)",
  transform: "translate3d(-50%, -50%, 0) scale(1)",
  tagRef: React.createRef<HTMLSpanElement>(),
  ...computePosition(idx, size),
});

interface ItemProps {
  transform: string;
  opacity: number;
  filter: string;
  idx: number;
  text: string;
  x: number;
  y: number;
  z: number;
  scale?: number;
  tagRef?: React.RefObject<HTMLSpanElement | null>;
}

const { radius, maxSpeed, initSpeed, direction } = {
  radius: 300,
  maxSpeed: 20,
  initSpeed: 40,
  direction: 135,
};

const size = 1.5 * radius;
const depth = 2 * radius;

const SphereComponent: React.FC = () => {
  const tagCloudRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<ItemProps[] | null>(null);
  const mouseX = useRef<number>(
    initSpeed * Math.sin(direction * (Math.PI / 180))
  );
  const mouseY = useRef<number>(
    -initSpeed * Math.cos(direction * (Math.PI / 180))
  );

  useEffect(() => {
    setItems(texts.map((text, i) => createTag(i, text, size)));
  }, []);

  const next = useCallback(() => {
    if (!items) return;

    const a =
      -(Math.min(Math.max(-mouseY.current, -size), size) / radius) * maxSpeed;
    const b =
      (Math.min(Math.max(-mouseX.current, -size), size) / radius) * maxSpeed;
    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return;

    const l = Math.PI / 180;
    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l),
    ];

    setItems((prev) =>
      prev!.map((item) => {
        if (!item.tagRef?.current) return item;

        const rx1 = item.x;
        const ry1 = item.y * sc[1] + item.z * -sc[0];
        const rz1 = item.y * sc[0] + item.z * sc[1];
        const rx2 = rx1 * sc[3] + rz1 * sc[2];
        const ry2 = ry1;
        const rz2 = rz1 * sc[3] - rx1 * sc[2];
        const per = (2 * depth) / (2 * depth + rz2);

        const scale = Number(per.toFixed(3));
        let alpha = per * per - 0.25;
        alpha = Number((alpha > 1 ? 1 : alpha).toFixed(3));

        return {
          ...item,
          x: rx2,
          y: ry2,
          z: rz2,
          opacity: alpha,
          transform: `translate3d(${rx2}px, ${ry2}px, 0) scale(${scale})`,
          filter: `alpha(opacity=${100 * alpha})`,
        };
      })
    );
  }, [items]);

  useEffect(() => {
    if (tagCloudRef.current) {
      const interval = setInterval(next, 100);
      return () => clearInterval(interval);
    }
  }, [next]);

  if (!items) return null;

  return (
    <div
      ref={tagCloudRef}
      className="tag-cloud"
      onMouseMove={(ev) => {
        if (tagCloudRef.current) {
          const rect = tagCloudRef.current.getBoundingClientRect();
          mouseX.current = (ev.clientX - (rect.left + rect.width / 2)) / 5;
          mouseY.current = (ev.clientY - (rect.top + rect.height / 2)) / 5;
        }
      }}
      style={{
        position: "relative",
        width: `${2 * radius}px`,
        height: `${2 * radius}px`,
      }}
    >
      {items.map((item) => (
        <span
          key={item.idx}
          className="tag-cloud__item"
          ref={item.tagRef}
          style={{
            filter: item.filter,
            opacity: item.opacity,
            transform: item.transform,
          }}
        >
          <Image
            src={images[item.text]}
            alt={item.text}
            width={24}
            height={24}
            style={{ marginRight: "5px" }}
          />
          {item.text}
        </span>
      ))}
    </div>
  );
};

const Sphere = dynamic(() => Promise.resolve(SphereComponent), { ssr: false });

export default Sphere;