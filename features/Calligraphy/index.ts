// Components
export {
  CalligraphyPage,
  Canvas,
  CharacterSelector,
  BrushSelector,
  StageProgress,
  StatsPanel,
  StrokeProgress,
  HowToUseModal,
  WrongStrokeOverlay,
  CelebrationOverlay,
  KanaTypeToggle,
  CanvasControls
} from './components';

// Store
export { default as useCalligraphyStore } from './store/useCalligraphyStore';
export type {
  BrushType,
  KanaType,
  LearningStage,
  IStrokeData,
  ICharacterData,
  IWordData
} from './store/useCalligraphyStore';

// Data
export { hiraganaData } from './data/hiraganaStrokes';
export { katakanaData } from './data/katakanaStrokes';
export { wordDataByCharacter, getWordForCharacter } from './data/wordData';

// Lib
export {
  validateStroke,
  validateCharacter,
  getStrokeHint,
  getDistance,
  getAngle,
  parseSvgPath
} from './lib/strokeValidation';
