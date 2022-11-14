import type { ButtonStyleType } from '@/Components/Button/types';
import { Colors } from '@/Theme/Variables';
import { ButtonComponentStyleTypes } from "@/Components/Button/types"

const ButtonComponentStyles: ButtonComponentStyleTypes = {
  buttonContainer: {
    maxWidth: 160,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 8,
  },
  buttonText: {
    marginLeft: 12,
    color: Colors.charcoal,
  },
};

export default ButtonComponentStyles;