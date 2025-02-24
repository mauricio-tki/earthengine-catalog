var dataset = ee.ImageCollection('MalariaAtlasProject/LST_Day_5km_Monthly')
                  .filter(ee.Filter.date('2022-01-01', '2022-12-31'));
var daytimeLandSurfaceTemp = dataset.select('Mean');
var visParams = {
  min: -20.0,
  max: 50.0,
  palette: [
    '800080', '0000ab', '0000ff', '008000', '19ff2b', 'a8f7ff', 'ffff00',
    'd6d600', 'ffa500', 'ff6b01', 'ff0000'
  ],
};
Map.setCenter(-88.6, 26.4, 1);
Map.addLayer(
    daytimeLandSurfaceTemp, visParams, 'Monthly Daytime Land Surface Temperature');
