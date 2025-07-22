import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBusinessCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_business_cards';
  info: {
    displayName: 'Business Cards';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    card_type: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsEvents extends Struct.ComponentSchema {
  collectionName: 'components_sections_events';
  info: {
    displayName: 'Events';
  };
  attributes: {
    date: Schema.Attribute.Date;
    details: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFocusAreas extends Struct.ComponentSchema {
  collectionName: 'components_sections_focus_areas';
  info: {
    displayName: 'Focus Areas';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroButtons extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_buttons';
  info: {
    displayName: 'hero_buttons';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
  };
}

export interface SectionsNewsItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_items';
  info: {
    displayName: 'News Items';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPartners extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    alt_text: Schema.Attribute.String;
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.business-cards': SectionsBusinessCards;
      'sections.events': SectionsEvents;
      'sections.focus-areas': SectionsFocusAreas;
      'sections.hero-buttons': SectionsHeroButtons;
      'sections.news-items': SectionsNewsItems;
      'sections.partners': SectionsPartners;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
