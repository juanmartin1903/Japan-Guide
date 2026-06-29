type TestComponentProps = {
  children?: React.ReactNode;
};

export default function TestComponent({ children }: TestComponentProps) {
  return (
    <div>
      {children}
    </div>
  );
}
