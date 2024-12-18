import React from 'react';
import clsx from 'clsx';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';
import styles from './styles.module.css';
import Ads from '../../components/Ads';

const LINK_CLASS_NAME = 'table-of-contents__link';
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active';
const TOP_OFFSET = 100;

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({ toc, isChild }) {
  if (!toc.length) {
    return null;
  }
  return (
    <>
      <Ads />
      <ul
        className={
          isChild ? '' : 'table-of-contents table-of-contents__left-border'
        }
      >
        {toc.map(heading => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={LINK_CLASS_NAME}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: heading.value }}
            />
            <Headings isChild toc={heading.children} />
          </li>
        ))}
      </ul>
    </>
  );
}

function TOC({ toc }) {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar')}>
      <Headings toc={toc} />
    </div>
  );
}

export default TOC;
