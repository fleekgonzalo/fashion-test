export type UseLayoutResults = {
  randomImages: () => void;
  randomMicrofactory: string | undefined;
  clicked: boolean;
  setClicked: (e: boolean) => void;
};

export type UseF3ManifestoResults = {
  refreshImages: () => void;
  viewMainImage: (e: any) => void;
  newImages: string[] | undefined;
  mainImage: string | undefined;
};

export type useCollectionsResult = {
  gallery: Gallery[];
  filterName: (e: any) => void;
  filterCollections: (e: any) => void;
  filterStyle: (e: any) => void;
  clickedStyle: boolean;
  clickedCollection: boolean;
  collectionSelect: string[];
  collectionFilter: string;
  styleSelect: string[];
  styleFilter: string;
  handleSetOrderIRL: (e: any) => void;
};

export type useWeb3FashionResults = {
  showImage: string | undefined;
  setShowImage: (e: string | undefined) => void;
  marqueeVariants: {
    animate: {
      x: number[];
      transition: {
        x: {
          repeat: any;
          repeatType: string;
          duration: number;
          ease: string;
        };
      };
    };
  };
};

export type marqueeVariants = {
  animate: {
    x: number[];
    transition: {
      x: {
        repeat: any;
        repeatType: string;
        duration: number;
        ease: string;
      };
    };
  };
};

export type GalleryProps = {
  gallery: Gallery[];
  handleSetOrderIRL: (e: any) => void;
};

export type SearchProps = {
  filterName: (e: any) => void;
  filterCollections: (e: any) => void;
  filterStyle: (e: any) => void;
  collectionSelect: string[];
  styleSelect: string[];
};

export type Gallery = {
  name: string;
  image: string;
  collection: string;
  style: string;
  link: string;
};

export type CollectionProps = {
  shopping: any;
};

export type Web3FashionProps = {
  goShopping: () => void;
};

export type useClearResults = {
  randomMessage: () => void;
  message: string;
};

export type useFormResults = {
  setSubmitSuccess: (e: boolean) => void;
  submitSuccess: boolean;
  handleSubmitForm: (e: any) => Promise<void>;
};

export type FormProps = {
  orderIRL: string;
};

export type shoppingAnimate = {
    x: number[],
    transition: {
      x: {
        repeat: any,
        repeatType: string,
        duration: number,
        ease: string,
      },
    },
}