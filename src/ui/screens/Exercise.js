import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DragDrop from '../components/DragDrop';
import SaveBtn from '../components/SaveBtn';
import { setObjetsDnD, setResultDnD } from '../../store/slices/exerciseSlice';
import { findByIndex } from '../../utils/array';
import '../../styles/dragdrop.css';

function getDataTransfered(e) {
  const data = e.dataTransfer.getData('data');
  return !!data && JSON.parse(data);
}

export default function Exercise() {
  const objetsDnD = useSelector((state) => state.exercise.objetsDnD);
  const resultDnD = useSelector((state) => state.exercise.resultDnD);
  const isDone = useSelector((state) => state.exercise.done);
  const dispatch = useDispatch();

  const handleOnDrop = (e, dataDnD, action) => {
    e.preventDefault();
    const data = getDataTransfered(e);
    if (findByIndex(dataDnD, data) === -1) {
      dispatch(action(data));
    }
  };

  const checkColorResult = (item, trueClass, falseClass) => {
    if (isDone) {
      return item?.value ? trueClass : falseClass;
    }
    return '';
  };

  const intro = isDone
    ? 'A continuación se mostrará en verde lo correcto y en rojo lo incorrecto:'
    : 'Ordena las siguientes listas:';

  return (
    <div className="flex-column">
      <div>{intro}</div>
      <div className="flex-row">
        <DragDrop
          title="Objetos"
          data={objetsDnD}
          draggable={!isDone}
          checkColorResult={(item) =>
            checkColorResult(item, 'dragdrop-item-ko', 'dragdrop-item-ok')
          }
          onDrop={(e) => handleOnDrop(e, objetsDnD, setObjetsDnD)}
        />
        <DragDrop
          title="Alimentos"
          data={resultDnD}
          draggable={!isDone}
          checkColorResult={(item) =>
            checkColorResult(item, 'dragdrop-item-ok', 'dragdrop-item-ko')
          }
          onDrop={(e) => handleOnDrop(e, resultDnD, setResultDnD)}
        />
      </div>
      <SaveBtn />
    </div>
  );
}
