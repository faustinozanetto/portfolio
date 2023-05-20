import Section from '@modules/sections/components/section/section';

export default async function AboutPage() {
  return (
    <Section className="my-4 bg-background-100 dark:bg-background-900 md:my-10 lg:my-14">
      <div className="flex flex-col space-y-4 text-neutral-900 dark:text-neutral-100 md:space-y-8">
        {/* Titles */}
        <h2 className="text-center text-3xl font-extrabold leading-10 text-primary-500 dark:text-primary-300 md:text-4xl lg:text-5xl">
          A little more about me
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg">
          I&apos;ve born in 2003 at a rather large city in the middle section of Argentina called Bahia Blanca.
        </p>
      </div>
    </Section>
  );
}
