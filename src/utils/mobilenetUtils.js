// 📁 src/utils/mobilenetUtils.js
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

export const predictWithMobileNet = async (imageElement) => {
  const model = await mobilenet.load(); // Otomatik olarak indirir
  const predictions = await model.classify(imageElement);
  return predictions[0]; // {className: 'banana', probability: 0.97}
};
