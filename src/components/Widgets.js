import React from 'react';
export default function Widgets({ title, data, type = '' }) {
  // const title = 'LinkedIn News';
  // console.log(props.data);
  // const data = props.data;
  console.log(data);
  console.log(type);
  return (
    <>
      <div className="card gedf-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          {type == 'course' ? 'Hello Course' : ''}
          {data.map(item => {
            return (
              <>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.time}:{item.reader}
                </h6>
                <p className="card-text">{item.title}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
