/* eslint-disable react/prop-types */
const MuscleGroup = ({
  activeList,
  listExer,
  setExersiceChoose,
  exersiceChoose,
  setObj,
  exobj,
}) => {
  return (
    <>
      {/* left part */}
      <div className='flex w-full flex-col justify-center items-center'>
        <h2 className='uppercase text-3xl m-2'>Choose muscle group</h2>
        {activeList && (
          <ul className='flex'>
            {listExer.map(({ category, image }) => (
              <li
                onClick={() => {
                  setExersiceChoose(category);
                }}
                key={category}
              >
                <div className=' cursor-pointer flex flex-col items-center rounded-xl p-7 bg-slate-400 m-2'>
                  <p className='text-xl uppercase my-5'>{category}</p>
                  <div className='w-24 h-24'>
                    <img src={image} alt='exersice image' />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {exersiceChoose && (
          <div className='flex bg-slate-400 items-center flex-col p-3 my-2'>
            <h3 className='text-2xl uppercase'>List of exercises:</h3>
            <ul className='flex'>
              {listExer.map((item) => {
                if (item.category === exersiceChoose) {
                  return item.exersises.map(({ name, image }) => (
                    <li
                      className=' cursor-pointer m-3 bg-green-200 rounded-xl p-3'
                      key={Math.random()}
                      onClick={() => {
                        setObj(() => ({
                          ...exobj,
                          name,
                          image,
                        }));
                      }}
                    >
                      {name}
                      <img className='w-24' src={image} alt='' />
                    </li>
                  ));
                }
              })}
            </ul>
          </div>
        )}
      </div>
      {/* left part */}
    </>
  );
};

export default MuscleGroup;
