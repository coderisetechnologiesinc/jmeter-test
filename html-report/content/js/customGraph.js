/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


    
$(document).ready(function() {
    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });
    
        try{
        refreshcustom_ulp_actual_live_offset(true);
    } catch(e){
        console.log(e);
    }    
    $(".portlet-header").css("cursor", "auto");
});

var responsecustom_ulp_actual_live_offsetInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_actual_live_offset", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Actual Live Offset (Distance from Live)", "X_Axis": "Elapsed Time (granularity: 60s)", "sample_Metric_Name": "ulp_actual_live_offset", "Y_Axis": "Duration in ms", "content_Message": "Actual Live Offset (duration in ms)"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Duration in ms',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_actual_live_offset'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Actual Live Offset (duration in ms) %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_actual_live_offset"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_actual_live_offset"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_actual_live_offset"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_actual_live_offset(fixTimestamps) {
    var infos = responsecustom_ulp_actual_live_offsetInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_actual_live_offset"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_actual_live_offset");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_actual_live_offset", "#overviewResponsecustom_ulp_actual_live_offset");
        $('#footerResponsecustom_ulp_actual_live_offset .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_buffer_fillInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_buffer_fill", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Buffer fill in Millis", "X_Axis": "Elapsed Time (granularity: 60s)", "sample_Metric_Name": "ulp_buffer_fill", "Y_Axis": "Buffer fill Time (ms)", "content_Message": "Time to buffer"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Buffer fill Time (ms)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_buffer_fill'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Time to buffer %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_buffer_fill"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_buffer_fill"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_buffer_fill"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_buffer_fill(fixTimestamps) {
    var infos = responsecustom_ulp_buffer_fillInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_buffer_fill"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_buffer_fill");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_buffer_fill", "#overviewResponsecustom_ulp_buffer_fill");
        $('#footerResponsecustom_ulp_buffer_fill .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_chunks_skippedInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_chunks_skipped", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Number of chunks skipped in case of play close to Live Edge", "X_Axis": "Elapsed Time (granularity: 60s)", "sample_Metric_Name": "ulp_chunks_skipped", "Y_Axis": "Number of chunks skipped", "content_Message": "Chunks skipped"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Number of chunks skipped',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_chunks_skipped'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Chunks skipped %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_chunks_skipped"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_chunks_skipped"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_chunks_skipped"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_chunks_skipped(fixTimestamps) {
    var infos = responsecustom_ulp_chunks_skippedInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_chunks_skipped"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_chunks_skipped");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_chunks_skipped", "#overviewResponsecustom_ulp_chunks_skipped");
        $('#footerResponsecustom_ulp_chunks_skipped .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_hitInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_cdns_hit", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "CDN Hit"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Number of calls to cache',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_hit'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x CDN Simulator Hit %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_hit"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_hit"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_hit"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_hit(fixTimestamps) {
    var infos = responsecustom_ulp_hitInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_hit"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_hit");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_hit", "#overviewResponsecustom_ulp_hit");
        $('#footerResponsecustom_ulp_hit .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_lag_ratioInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_lag_ratio", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Lag ratio in percentage", "X_Axis": "Elapsed Time (granularity: 60s)", "sample_Metric_Name": "ulp_lag_ratio", "Y_Axis": "Percentage", "content_Message": "Lag Ratio (%)"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Percentage',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_lag_ratio'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Lag Ratio (%) %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_lag_ratio"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_lag_ratio"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_lag_ratio"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_lag_ratio(fixTimestamps) {
    var infos = responsecustom_ulp_lag_ratioInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_lag_ratio"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_lag_ratio");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_lag_ratio", "#overviewResponsecustom_ulp_lag_ratio");
        $('#footerResponsecustom_ulp_lag_ratio .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_lag_ratio_wo_bfInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_lag_ratio_wo_bf", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Lag ratio without buffer fill in percentage", "X_Axis": "Elapsed Time (granularity: 60s)", "sample_Metric_Name": "ulp_lag_ratio_wo_bf", "Y_Axis": "Percentage", "content_Message": "Lag Ratio wo Buffer fill(%)"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Percentage',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_lag_ratio_wo_bf'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Lag Ratio wo Buffer fill(%) %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_lag_ratio_wo_bf"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_lag_ratio_wo_bf"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_lag_ratio_wo_bf"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_lag_ratio_wo_bf(fixTimestamps) {
    var infos = responsecustom_ulp_lag_ratio_wo_bfInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_lag_ratio_wo_bf"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_lag_ratio_wo_bf");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_lag_ratio_wo_bf", "#overviewResponsecustom_ulp_lag_ratio_wo_bf");
        $('#footerResponsecustom_ulp_lag_ratio_wo_bf .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_lag_timeInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_lag_time", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Lag time in Millis", "X_Axis": "Elapsed Time (granularity: 60s)", "sample_Metric_Name": "ulp_lag_time", "Y_Axis": "Lag Time (ms)", "content_Message": "Lag time"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Lag Time (ms)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_lag_time'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Lag time %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_lag_time"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_lag_time"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_lag_time"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_lag_time(fixTimestamps) {
    var infos = responsecustom_ulp_lag_timeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_lag_time"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_lag_time");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_lag_time", "#overviewResponsecustom_ulp_lag_time");
        $('#footerResponsecustom_ulp_lag_time .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_missInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_cdns_miss", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "CDN Miss"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Number of calls to origin',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_miss'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x CDN Simulator Miss %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_miss"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_miss"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_miss"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_miss(fixTimestamps) {
    var infos = responsecustom_ulp_missInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_miss"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_miss");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_miss", "#overviewResponsecustom_ulp_miss");
        $('#footerResponsecustom_ulp_miss .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_speed_rateInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_speed_rate", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Speed rate in percentage", "X_Axis": "Elapsed Time (granularity: 60s)", "sample_Metric_Name": "ulp_speed_rate", "Y_Axis": "Percentage", "content_Message": "Speed rate (%)"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Elapsed Time (granularity: 60s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Percentage',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_speed_rate'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Speed rate (%) %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_speed_rate"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_speed_rate"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_speed_rate"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_speed_rate(fixTimestamps) {
    var infos = responsecustom_ulp_speed_rateInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponsecustom_ulp_speed_rate"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_speed_rate");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_speed_rate", "#overviewResponsecustom_ulp_speed_rate");
        $('#footerResponsecustom_ulp_speed_rate .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }else{
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    
    if(elem.id == "bodyResponsecustom_ulp_actual_live_offset"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_actual_live_offset(true);
        }
            document.location.href="#custom_ulp_actual_live_offset";
        }
    if(elem.id == "bodyResponsecustom_ulp_buffer_fill"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_buffer_fill(true);
        }
            document.location.href="#custom_ulp_buffer_fill";
        }
    if(elem.id == "bodyResponsecustom_ulp_chunks_skipped"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_chunks_skipped(true);
        }
            document.location.href="#custom_ulp_chunks_skipped";
        }
    if(elem.id == "bodyResponsecustom_ulp_hit"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_hit(true);
        }
            document.location.href="#custom_ulp_hit";
        }
    if(elem.id == "bodyResponsecustom_ulp_lag_ratio"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_lag_ratio(true);
        }
            document.location.href="#custom_ulp_lag_ratio";
        }
    if(elem.id == "bodyResponsecustom_ulp_lag_ratio_wo_bf"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_lag_ratio_wo_bf(true);
        }
            document.location.href="#custom_ulp_lag_ratio_wo_bf";
        }
    if(elem.id == "bodyResponsecustom_ulp_lag_time"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_lag_time(true);
        }
            document.location.href="#custom_ulp_lag_time";
        }
    if(elem.id == "bodyResponsecustom_ulp_miss"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_miss(true);
        }
            document.location.href="#custom_ulp_miss";
        }
    if(elem.id == "bodyResponsecustom_ulp_speed_rate"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_speed_rate(true);
        }
            document.location.href="#custom_ulp_speed_rate";
        }
    }
}

function toggleAll(id, checked){
    var placeholder = document.getElementById(id);
    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);
    var choiceContainer;
    
    if(id == "choicesResponsecustom_ulp_actual_live_offset"){
        choiceContainer = $("#choicesResponsecustom_ulp_actual_live_offset");
        refreshcustom_ulp_actual_live_offset(false);
    }
    else if(id == "choicesResponsecustom_ulp_buffer_fill"){
        choiceContainer = $("#choicesResponsecustom_ulp_buffer_fill");
        refreshcustom_ulp_buffer_fill(false);
    }
    else if(id == "choicesResponsecustom_ulp_chunks_skipped"){
        choiceContainer = $("#choicesResponsecustom_ulp_chunks_skipped");
        refreshcustom_ulp_chunks_skipped(false);
    }
    else if(id == "choicesResponsecustom_ulp_hit"){
        choiceContainer = $("#choicesResponsecustom_ulp_hit");
        refreshcustom_ulp_hit(false);
    }
    else if(id == "choicesResponsecustom_ulp_lag_ratio"){
        choiceContainer = $("#choicesResponsecustom_ulp_lag_ratio");
        refreshcustom_ulp_lag_ratio(false);
    }
    else if(id == "choicesResponsecustom_ulp_lag_ratio_wo_bf"){
        choiceContainer = $("#choicesResponsecustom_ulp_lag_ratio_wo_bf");
        refreshcustom_ulp_lag_ratio_wo_bf(false);
    }
    else if(id == "choicesResponsecustom_ulp_lag_time"){
        choiceContainer = $("#choicesResponsecustom_ulp_lag_time");
        refreshcustom_ulp_lag_time(false);
    }
    else if(id == "choicesResponsecustom_ulp_miss"){
        choiceContainer = $("#choicesResponsecustom_ulp_miss");
        refreshcustom_ulp_miss(false);
    }
    else if(id == "choicesResponsecustom_ulp_speed_rate"){
        choiceContainer = $("#choicesResponsecustom_ulp_speed_rate");
        refreshcustom_ulp_speed_rate(false);
    }
}