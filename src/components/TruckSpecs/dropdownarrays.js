const { getQueriesForElement } = require("@testing-library/react")

//truck
const featuresTruck = {
    truckType: ['Pumper', 'Tanker', 'MVP'],
    numberAxles: [2, 3],
    engine: ['L9-330', 'L9-350', 'L9-380', 'L9-400', 'L9-450'],
    fuelTankSize: [50, 65, 100],
    batteries: ['3-Array', '6-Array'],
    batteryCharging: ['standard receptacle', 'auto charge', 'autocharge/pump plus'],
    alternator: ['L/N 320', 'Delco 320', 'Delco 430', 'Niehoff 360'],
    electrical: ['Point to point', 'Akron VMUX'],
    electricalDisplaySwitch: ['Standard Switches', 'Vista Display', 'Vista Displays (2)'],
    wheelType: ['Painted Steel', 'Aluminum'],
    tires: ['Goodyear', 'Michelin'],
    suspension: ['spring', 'air ride'],
    shocks: [0, 2],
    brakes: ['disc', '"S" Cam'],
}
//don't forget free form box for notes: 

//pump
const featuresPump = {
    pumpModel: ['Hale QFLO', 'Hale QMAX 1250-2000', 'Hale QMAX 2250', 'Hale QTWO', 'Hale RSD', 'Hale AP PTO', 'Waterous CS', 'Waterous CSU', 'Waterous CM', 'Waterous CMU', 'Darley'],
    primer: ['standard', 'Air - Manual', 'Air - Auto'],
    pumpShift: ['Standard', 'Standard w/Override'],
    anodeMonitor: ['Yes', 'No'],
    thermalRV: ['No', 'Standard', 'Standard TRV', 'TRV w/light', 'TRV w/light & alarm'],
    frontSuctionMethod: ['manual valve', 'electric valve', 'air valve'],
    frontSuctionValve: ['No', '4" No Valve', '4" w/Air Valve', '4" w/Electric Valve', '5" No Valve', '5" w/Air Valve', '5" w/Electric Valve'],
    swivel: ['Yes', 'No'],
    rearSuctionMethod: ['manual valve', 'electric valve', 'air valve'],
    rearSuctionValve: ['2-1/2" Manual Valve', '2-1/2" Handwheel Valve', '2-1/2" Electric Valve', '3" Manual Valve', '3" Handwheel Valve', '3" Electric Valve'],
    interfaceCover: ['N/a', 'Hypalon', 'Treadplate'],
    interfaceControls: ['Single', 'Double', 'Triple'],
    tankFill: ['No power fill', 'Tank 1 power', 'Both Tanks power'],
    boosterHose: [0, 1]
    }

module.exports = (featuresTruck, featuresPump)
