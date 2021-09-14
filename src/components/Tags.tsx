import React from "react";

export interface IProps {
  tags: Array<string>;
  className?: string;
}

export default function Tags({ tags, className }: IProps) {
  return (
    <div className={`flex flex-wrap -m-0.5 dark:-m-2  ${className}`}>
      {tags.map((tag) => (
        <Tag key={tag}>{`#${tag}`}</Tag>
      ))}
    </div>
  );
}

export interface ITagProps {
  children: JSX.Element | string;
}

export function Tag(props: ITagProps): JSX.Element {
  return (
    <span
      className={`
      m-0.5 rounded px-2
      text-xs cursor-pointer
      bg-tagBg
      text-secondary
      font-mono
      pb-0
      !py-1
      `}
    >
      {props.children}
    </span>
  );
}
