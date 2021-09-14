import React from "react";
import { Link, navigate } from "gatsby";
import Tags from "./Tags";
import { oneline } from "../utils/strTag";

// TODO better define this structure
export interface IProps {
  slug: string;
  title: string;
  content: string;
  authorId: string;
  date: string;
  readingTime: string;
  tags: Array<string>;
}

export default function PostCard(props: IProps): JSX.Element {
  const { slug, title, content, authorId, date, readingTime, tags } = props;

  function onClick(_e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    navigate(slug);
  }

  return (
    <article
      onClick={onClick}
      className={oneline`
        bg-postBg p-3 rounded-md
        cursor-pointer 
        flex flex-col
        space-y-1
        sm:w-3/4
        w-full
        !mt-4
        min-h-200
    `}
    >
      <div className="">
        <h3 className="p-0">
          <Link to={slug}>{title}</Link>
        </h3>
        <div className="p-1 text-sm card-subheading-info">
          <div>
            {`${date} | ${readingTime}`}
            {` | by `}
            <span className="font-bold text-secondary text-sm">{authorId}</span>
          </div>
        </div>
      </div>
      <section>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      <Tags tags={tags} className="!mt-auto pt-5 mb-2" />
    </article>
  );
}
