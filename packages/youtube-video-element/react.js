// This file is generated by media-elements/scripts/build-react!
'use client';

import React from 'react';
import Element from './youtube-video-element.js';

export default React.forwardRef(({ children, ...props }, ref) => {
  const attrs = propsToAttrs({ ...props, ref });

  // Only render the custom element template HTML on the server.
  // The custom element will render itself on the client.
  if (typeof window === 'undefined' && Element?.getTemplateHTML && Element?.shadowRootOptions) {
    const { mode, delegatesFocus } = Element.shadowRootOptions;

    const templateShadowRoot = React.createElement('template', {
      shadowrootmode: mode,
      shadowrootdelegatesfocus: delegatesFocus,
      dangerouslySetInnerHTML: {
        __html: Element.getTemplateHTML(attrs),
      },
    });

    children = [templateShadowRoot, children];
  }

  return React.createElement('youtube-video', attrs, ...[].concat(children));
});

const ReactPropToAttrNameMap = {
  className: 'class',
  classname: 'class',
  htmlFor: 'for',
  viewBox: 'viewBox',
};

function propsToAttrs(props = {}) {
  let attrs = {};
  for (let [propName, propValue] of Object.entries(props)) {
    let attrName = toAttrName(propName, propValue);
    if (attrName) attrs[attrName] = toAttrValue(propValue);
  }
  return attrs;
}

function toAttrName(propName, propValue) {
  if (ReactPropToAttrNameMap[propName]) return ReactPropToAttrNameMap[propName];
  if (typeof propValue == 'undefined') return undefined;
  if (typeof propValue === 'boolean' && !propValue) return undefined;
  if (/[A-Z]/.test(propName)) return propName.toLowerCase();
  return propName;
}

function toAttrValue(propValue) {
  if (typeof propValue === 'boolean') return '';
  if (Array.isArray(propValue)) return propValue.join(' ');
  return propValue;
}
