declare module 'react-lazy-load-image-component' {
  import * as React from 'react';

  export interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    afterLoad?: () => void;
    beforeLoad?: () => void;
    delayMethod?: 'throttle' | 'debounce';
    delayTime?: number;
    effect?: 'blur' | 'opacity' | 'black-and-white';
    placeholderSrc?: string;
    scrollPosition?: { x: number; y: number };
    threshold?: number;
    useIntersectionObserver?: boolean;
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  }

  export class LazyLoadImage extends React.Component<LazyLoadImageProps, any> {}

  export default LazyLoadImage;
}