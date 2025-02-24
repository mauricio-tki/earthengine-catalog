var dataset = ee.ImageCollection('MalariaAtlasProject/LST_Night_5km_8-Daily')
                  .filter(ee.Filter.date('2022-01-01', '2022-04-01'));
var nighttimeLandSurfaceTemp = dataset.select('Mean');
var visParams = {
  min: -30.0,
  max: 30.0,
  palette: [
    '800080', '0000ab', '0000ff', '008000', '19ff2b', 'a8f7ff', 'ffff00',
    'd6d600', 'ffa500', 'ff6b01', 'ff0000'
  ],
};
Map.setCenter(-88.6, 26.4, 1);
Map.addLayer(
    nighttimeLandSurfaceTemp, visParams, '8-Daily Nighttime Land Surface Temperature');
