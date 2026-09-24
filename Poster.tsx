import type { CSSProperties } from "react";
import type { PosterData } from "@/lib/content";

type Props = PosterData & { className?: string };

export default function Poster({ kicker, title, sub, big, image, focus, colors, className = "" }: Props) {
  const style = {
    "--a": colors[0],
    "--b": colors[1],
    "--c": colors[2],
  } as CSSProperties;

  return (
    <article className={`poster ${image ? "poster-real" : ""} ${className}`} style={style}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="poster-img" src={image} alt={`${kicker}: ${title}`} loading="lazy" style={focus ? { objectPosition: focus } : undefined} />
      ) : null}
      <div className="poster-streaks" aria-hidden="true" />
      {big ? (
        <span className="poster-big" aria-hidden="true">
          {big}
        </span>
      ) : null}
      <div className="poster-kicker">{kicker}</div>
      <div className="poster-copy">
        <h3>{title}</h3>
        {sub ? <p>{sub}</p> : null}
      </div>
    </article>
  );
}
