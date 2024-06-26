import { twMerge } from 'tailwind-merge';

type SearchIconProps = {
  className: string;
};

const SearchIcon = ({ className }: SearchIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={twMerge('!w-6 h-6', className)}>
      <path d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z' />
    </svg>
  );
};

export default SearchIcon;
