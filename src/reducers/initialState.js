export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  brewSession: {
    degreesF: 0,
    pumpStatus: 'off',
    heaterStatus: 'off'
  },
  brewSessionStatus: {
    isBrewSessionRunning: false
  }
};
