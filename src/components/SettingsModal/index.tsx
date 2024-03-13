import { useState } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'redux/store';
import { TimeFormat, UnitTypes, setSettings } from '../../redux/settingsSlice';
import { Button } from 'components/Button';
import TextSection from 'components/TextSection';

interface SettingsProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  time: Date;
}

const SettingsModal = (props: SettingsProps) => {
  const { isOpen, setIsOpen, time } = props;
  
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { unitType, timeFormat } = useAppSelector((state) => state.settings);
  const [selectedUnitType, setSelectedUnitType] = useState<UnitTypes>(unitType)
  const [selectedTimeFormat, setSelectedTimeFormat] = useState<TimeFormat>(timeFormat)
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedUnitType(unitType);
    setSelectedTimeFormat(timeFormat);
  }

  const handleSave = () => {
    dispatch(setSettings({
      unitType: selectedUnitType,
      timeFormat: selectedTimeFormat
    }));
    setIsOpen(false);
  }

  return (
    <ModalContainer $isOpen={isOpen}>
      <ModalContent>
        <TextSection $size='medium'>Settings</TextSection>
        <SectionContainer>
          <TextSection $size='small'>Units</TextSection>
          <ButtonGroup>
            <Button
              $size='medium'
              $isActive={selectedUnitType === UnitTypes.Imperial}
              onClick={() => setSelectedUnitType(UnitTypes.Imperial)}
            >
              Imperial
            </Button>
            <Button
              $size='medium'
              $isActive={selectedUnitType === UnitTypes.Metric}
              onClick={() => setSelectedUnitType(UnitTypes.Metric)}
            >
              Metric
            </Button>
            <Button
              $size='medium'
              $isActive={selectedUnitType === UnitTypes.Standard}
              onClick={() => setSelectedUnitType(UnitTypes.Standard)}
            >
              Standard
            </Button>
          </ButtonGroup>
        </SectionContainer>
        <SectionContainer>
          <TextSection $size='small'>Time</TextSection>
          <ButtonGroup>
            <Button
              $size='medium'
              $isActive={selectedTimeFormat === TimeFormat.Meridiem}
              onClick={() => setSelectedTimeFormat(TimeFormat.Meridiem)}
            >
              AM/PM
            </Button>
            <Button
              $size='medium'
              $isActive={selectedTimeFormat === TimeFormat.Full}
              onClick={() => setSelectedTimeFormat(TimeFormat.Full)}
            >
              24h
            </Button>
          </ButtonGroup>
        </SectionContainer>
        <ButtonGroup>
          <Button $size='medium' onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button $size='medium' onClick={handleSave}>
            Save
          </Button>
        </ButtonGroup>
        <TextSection>
          {time.getHours().toString().padStart(2, '0') + ":" + time.getMinutes().toString().padStart(2, '0')}
        </TextSection>
      </ModalContent>
    </ModalContainer>
  )
}

const ModalContainer = styled.div<{$isOpen: boolean;}>`
  opacity: ${props => props.$isOpen ? 1 : 0};
  position: absolute;
  width: 100%;
  height: ${props => props.$isOpen ? "100%" : 0};
  top: 0;
  left: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, .8);
  transition: opacity linear .2s;
  z-index: 1;
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: ${props => props.theme.background};
  border: ${props => props.theme.border} solid 2px;
  border-radius: 8px;
  padding: 20px;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
`

export default SettingsModal;