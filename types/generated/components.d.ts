import type { Schema, Attribute } from '@strapi/strapi';

export interface HtmlSkills extends Schema.Component {
  collectionName: 'components_html_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'html.skills': HtmlSkills;
    }
  }
}
