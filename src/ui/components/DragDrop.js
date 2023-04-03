import React from 'react';

export default function DragDrop({
  title,
  data,
  onDrop,
  draggable,
  checkColorResult,
}) {
  return (
    <div
      className="draggable-container flex-column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => draggable && onDrop(e)}
    >
      <h2 className="draggable-title">{title}</h2>
      <div className="flex-row">
        {data.map((item) => (
          <div
            key={item.id}
            className={`${checkColorResult(item)} dragdrop-item`}
            draggable={draggable}
            onDragStart={(e) =>
              e.dataTransfer.setData('data', JSON.stringify(item))
            }
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
