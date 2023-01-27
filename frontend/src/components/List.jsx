import OptionHeader from './OptionHeader';

function List({elements, Card, options, headerText, emptyText, className}) {
    console.log(elements, Card, options, headerText, emptyText);
  return (
    <div
    className={"mx-auto w-full h-[300px] mb-10 py-2" + " " + className}
    >
        <OptionHeader text={headerText} options={options} />
        <section className="overflow-scroll h-[90%] pr-2 flex flex-col">
          {
          (elements.length) ? 
          elements.map((x) => <Card elem={x} key={x._id} />)
          :
          <p
            className="mx-auto text-gray-500 text-xl"
          >{emptyText}</p>
          }
        </section>
    </div>
  )
}

export default List