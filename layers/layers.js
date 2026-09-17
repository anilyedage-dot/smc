var wms_layers = [];

var format_mnc2_0 = new ol.format.GeoJSON();
var features_mnc2_0 = format_mnc2_0.readFeatures(json_mnc2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mnc2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mnc2_0.addFeatures(features_mnc2_0);
var lyr_mnc2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mnc2_0, 
                style: style_mnc2_0,
                popuplayertitle: 'mnc2',
                interactive: true,
                title: '<img src="styles/legend/mnc2_0.png" /> mnc2'
            });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_landuse_2 = new ol.format.GeoJSON();
var features_landuse_2 = format_landuse_2.readFeatures(json_landuse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_2.addFeatures(features_landuse_2);
var lyr_landuse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_2, 
                style: style_landuse_2,
                popuplayertitle: 'landuse',
                interactive: true,
                title: '<img src="styles/legend/landuse_2.png" /> landuse'
            });
var format_natural_3 = new ol.format.GeoJSON();
var features_natural_3 = format_natural_3.readFeatures(json_natural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_3.addFeatures(features_natural_3);
var lyr_natural_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_3, 
                style: style_natural_3,
                popuplayertitle: 'natural',
                interactive: true,
                title: '<img src="styles/legend/natural_3.png" /> natural'
            });
var format_places_4 = new ol.format.GeoJSON();
var features_places_4 = format_places_4.readFeatures(json_places_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_places_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_places_4.addFeatures(features_places_4);
var lyr_places_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_places_4, 
                style: style_places_4,
                popuplayertitle: 'places',
                interactive: true,
                title: '<img src="styles/legend/places_4.png" /> places'
            });
var format_pois_5 = new ol.format.GeoJSON();
var features_pois_5 = format_pois_5.readFeatures(json_pois_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pois_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pois_5.addFeatures(features_pois_5);
var lyr_pois_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pois_5, 
                style: style_pois_5,
                popuplayertitle: 'pois',
                interactive: true,
                title: '<img src="styles/legend/pois_5.png" /> pois'
            });
var format_proctected_area_6 = new ol.format.GeoJSON();
var features_proctected_area_6 = format_proctected_area_6.readFeatures(json_proctected_area_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proctected_area_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proctected_area_6.addFeatures(features_proctected_area_6);
var lyr_proctected_area_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proctected_area_6, 
                style: style_proctected_area_6,
                popuplayertitle: 'proctected_area',
                interactive: true,
                title: '<img src="styles/legend/proctected_area_6.png" /> proctected_area'
            });
var format_railway_7 = new ol.format.GeoJSON();
var features_railway_7 = format_railway_7.readFeatures(json_railway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_7.addFeatures(features_railway_7);
var lyr_railway_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_7, 
                style: style_railway_7,
                popuplayertitle: 'railway',
                interactive: true,
                title: '<img src="styles/legend/railway_7.png" /> railway'
            });
var format_religues_places_8 = new ol.format.GeoJSON();
var features_religues_places_8 = format_religues_places_8.readFeatures(json_religues_places_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_religues_places_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_religues_places_8.addFeatures(features_religues_places_8);
var lyr_religues_places_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_religues_places_8, 
                style: style_religues_places_8,
                popuplayertitle: 'religues_places',
                interactive: true,
                title: '<img src="styles/legend/religues_places_8.png" /> religues_places'
            });
var format_road_9 = new ol.format.GeoJSON();
var features_road_9 = format_road_9.readFeatures(json_road_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_9.addFeatures(features_road_9);
var lyr_road_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_9, 
                style: style_road_9,
                popuplayertitle: 'road',
                interactive: true,
                title: '<img src="styles/legend/road_9.png" /> road'
            });
var format_water_10 = new ol.format.GeoJSON();
var features_water_10 = format_water_10.readFeatures(json_water_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_10.addFeatures(features_water_10);
var lyr_water_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_10, 
                style: style_water_10,
                popuplayertitle: 'water',
                interactive: true,
                title: '<img src="styles/legend/water_10.png" /> water'
            });

lyr_mnc2_0.setVisible(true);lyr_building_1.setVisible(true);lyr_landuse_2.setVisible(true);lyr_natural_3.setVisible(true);lyr_places_4.setVisible(true);lyr_pois_5.setVisible(true);lyr_proctected_area_6.setVisible(true);lyr_railway_7.setVisible(true);lyr_religues_places_8.setVisible(true);lyr_road_9.setVisible(true);lyr_water_10.setVisible(true);
var layersList = [lyr_mnc2_0,lyr_building_1,lyr_landuse_2,lyr_natural_3,lyr_places_4,lyr_pois_5,lyr_proctected_area_6,lyr_railway_7,lyr_religues_places_8,lyr_road_9,lyr_water_10];
lyr_mnc2_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MOD_OR_NOT': 'MOD_OR_NOT', 'ORGI_Uniqu': 'ORGI_Uniqu', 'STATE_UT': 'STATE_UT', 'STATE_LGD': 'STATE_LGD', 'Dist_LGD': 'Dist_LGD', 'Sub_dist': 'Sub_dist', 'Subdis_LGD': 'Subdis_LGD', 'Subdis_Typ': 'Subdis_Typ', 'Vill_name': 'Vill_name', 'Vill_cat': 'Vill_cat', 'Vill_LGD': 'Vill_LGD', 'District': 'District', });
lyr_building_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_landuse_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_natural_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_places_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_pois_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_proctected_area_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', });
lyr_railway_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_religues_places_8.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_road_9.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_water_10.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_mnc2_0.set('fieldImages', {'OBJECTID_1': '', 'Shape_Leng': '', 'Shape_Area': '', 'MOD_OR_NOT': '', 'ORGI_Uniqu': '', 'STATE_UT': '', 'STATE_LGD': '', 'Dist_LGD': '', 'Sub_dist': '', 'Subdis_LGD': '', 'Subdis_Typ': '', 'Vill_name': '', 'Vill_cat': '', 'Vill_LGD': '', 'District': '', });
lyr_building_1.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_landuse_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_natural_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_places_4.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'population': '', 'name': '', });
lyr_pois_5.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_proctected_area_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', });
lyr_railway_7.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_religues_places_8.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_road_9.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_water_10.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_mnc2_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'MOD_OR_NOT': 'no label', 'ORGI_Uniqu': 'no label', 'STATE_UT': 'no label', 'STATE_LGD': 'no label', 'Dist_LGD': 'no label', 'Sub_dist': 'no label', 'Subdis_LGD': 'no label', 'Subdis_Typ': 'no label', 'Vill_name': 'no label', 'Vill_cat': 'no label', 'Vill_LGD': 'no label', 'District': 'no label', });
lyr_building_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_landuse_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_natural_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_places_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'no label', });
lyr_pois_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_proctected_area_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', });
lyr_railway_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_religues_places_8.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_road_9.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_water_10.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_water_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});