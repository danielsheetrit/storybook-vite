type ButtonVariants = {
  primary: {
    bg: string;
    hoverBg: string;
  };
  secondary: {
    bg: string;
    hoverBg: string;
  };
};

type ButtonSizes = {
  sm: {
    xPadding: string;
    yPadding: string;
  };
  md: {
    xPadding: string;
    yPadding: string;
  };
};

// ---------------------------------------------------

const buttonSizes: ButtonSizes = {
  sm: {
    xPadding: "10px",
    yPadding: "5px",
  },
  md: {
    xPadding: "20px",
    yPadding: "10px",
  },
};

const buttonVariants: ButtonVariants = {
  primary: {
    bg: "#3468C0",
    hoverBg: "#F6B17A",
  },
  secondary: {
    bg: "#7360DF",
    hoverBg: "#A1EEBD",
  },
};

type Props = {
  title: string;
  variant: keyof ButtonVariants;
  size: keyof ButtonSizes;
};

export default function Button(props: Props) {
  const { title, variant, size } = props;

  const selected = buttonVariants[variant] || buttonVariants.primary;
  const selectedSize = buttonSizes[size] || buttonSizes.md;

  return (
    <button
      style={{
        backgroundColor: selected.bg,
        borderRadius: "10px",
        outline: "none",
        border: "none",
        cursor: "pointer",
        color: 'white',
        paddingTop: selectedSize.yPadding,
        paddingBottom: selectedSize.yPadding,
        paddingLeft: selectedSize.xPadding,
        paddingRight: selectedSize.xPadding,
      }}
    >
      {title}
    </button>
  );
}
