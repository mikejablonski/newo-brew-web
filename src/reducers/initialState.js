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
    pumpStatus: 'off',
    heaterStatus: 'off'
  },
  brewSessionStatus: {
    isBrewSessionRunning: false,
    sessionName: 'NewoBeer',
    mashTemp: 153,
    mashHoldTime: 60,
    data: {}
  },
  tempStatus: {
    degreesF: 0
  },
  settings: {
    tempUnits: 'F'
  }
};
