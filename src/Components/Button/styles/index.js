import type { ButtonStyleType } from '@/Components/Button/types';
import { Colors } from '@/Theme/Variables';
import { ButtonComponentStyleTypes } from "@/Components/Button/types"

const ButtonComponentStyles: ButtonComponentStyleTypes = {
  buttonContainer: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 8,
  },
  buttonText: {
    color: Colors.charcoal,
  },
};

export default ButtonComponentStyles;
