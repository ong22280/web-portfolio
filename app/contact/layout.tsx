export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-8 pt-4 md:py-10 md:pt-16">
      <div className="justify-center inline-block max-w-xl text-center">
        {children}
      </div>
    </section>
  );
}
