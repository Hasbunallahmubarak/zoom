interface Props {
  toggle: boolean;
  handleToggleEffect: () => void;
}
const Toggler = ({ toggle, handleToggleEffect }: Props) => {
  return (
    <div>
      <button
        className={toggle ? "theme-toggle" : "theme-toggle--reversed"}
        type="button"
        title="Toggle moon sun theme"
        aria-label="Toggle moon sun theme"
        onClick={() => handleToggleEffect()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="1em"
          height="1em"
          fill="currentColor"
          className="theme-toggle__moon"
          viewBox="0 0 32 32"
        >
          {/* <!-- Moon shape (crescent) icon --> */}
          <path d="M21 16c0-4.418-3.582-8-8-8-2.21 0-4.237.91-5.678 2.392C9.956 13.216 9 14.491 9 15.953c0 4.418 3.582 8 8 8 1.463 0 2.738-.956 3.563-2.322.482 1.441 2.176 2.392 4.625 2.392 4.418 0 8-3.582 8-8z" />
        </svg>
      </button>
    </div>
  );
};

export default Toggler;
