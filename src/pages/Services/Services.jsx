import Button from '../../components/ui/Button';

export default function Services({ onBookAppointment }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,242,248,0.2)_36%,rgba(255,242,248,0.1)_52%,rgba(255,255,255,0)_68%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[650px] flex-col items-center px-5 text-center pt-24 sm:px-8 md:max-w-[720px]">
        <p className="mb-6 text-lg font-bold uppercase tracking-[0.18em] text-primary sm:text-xl">Our Services</p>
        <h1 className="text-5xl font-bold leading-[1.05] text-black sm:text-6xl md:text-7xl">
          Coming
          <br />
          <span className="font-script text-[1.3em] font-normal text-primary">Soon</span>
        </h1>
        <p className="mt-4 max-w-md text-base font-medium leading-8 text-black">
          We are crafting premium, personalized beauty treatments for you. Check back soon to explore our full service
          menu.
        </p>
        {onBookAppointment && (
          <Button className="mt-8 h-12 w-full sm:mt-10 sm:h-14 sm:w-auto" onClick={onBookAppointment}>
            Book Appointment
          </Button>
        )}
      </div>
    </section>
  );
}
