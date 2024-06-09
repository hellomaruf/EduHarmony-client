function SectionTitle({ title }) {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="my-8 lg:my-10 text-center"
    >
      <h2 className="text-3xl lg:text-4xl font-semibold">{title}</h2>
    </div>
  );
}

export default SectionTitle;
