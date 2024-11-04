import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DAp7F7uL.js";const y=JSON.parse('{"title":"Sensors","description":"","frontmatter":{},"headers":[],"relativePath":"reference/definitions.md","filePath":"reference/definitions.md","lastUpdated":1730044821000}'),e={name:"reference/definitions.md"},t=n(`<h1 id="sensors" tabindex="-1">Sensors <a class="header-anchor" href="#sensors" aria-label="Permalink to &quot;Sensors&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can find all sensors names in the definitions here: <a href="https://github.com/kellerza/sunsynk/blob/main/src/sunsynk/definitions" target="_blank" rel="noreferrer">https://github.com/kellerza/sunsynk/blob/main/src/sunsynk/definitions</a></p></div><p>You can add sensors under the <code>SENSORS</code> and <code>SENSORS_FIRST_INVERTER</code> keys in the configuration.</p><p>If you want to add the <em>Battery SOC</em> sensor, you can use any of the following formats. In the logs you will see the first format (no spaces and all lower case).</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSORS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_soc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Battery SOC</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_SOC</span></span></code></pre></div><p>This page lists common sensors that can also be added through sensor groups. You can find all the supported sensor names in the sensor definition files, or even use the Modbus protocol document to create your own definitions.</p><h2 id="sensor-definitions" tabindex="-1">Sensor definitions <a class="header-anchor" href="#sensor-definitions" aria-label="Permalink to &quot;Sensor definitions&quot;">​</a></h2><p>The sensor definitions include the modbus register number (or several registers), the name of the sensor, the unit and other optional parameters. For example:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Sensor(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">183</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Battery voltage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VOLT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Sensor(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">184</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Battery SOC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span></code></pre></div><p>The last parameter in the battery voltage sensor definition is a factor, in this case a value of 1 in the register represents 0.01V. When the factor is negative for normal sensors it indicates that the number in the register is Signed (it can be negative &amp; positive)</p><p>To enable both these sensors in your configuration, simply use the names:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSORS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_voltage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_soc</span></span></code></pre></div><p>You can find the details of the definitions <a href="https://github.com/kellerza/sunsynk/blob/main/src/sunsynk/definitions" target="_blank" rel="noreferrer">here</a> and definitions are selected in the configuration with one of the following options:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSOR_DEFINITIONS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">single-phase / three-phase [low voltage] / three-phase-hv [high voltage]</span></span></code></pre></div><h2 id="groups-of-sensors" tabindex="-1">Groups of sensors <a class="header-anchor" href="#groups-of-sensors" aria-label="Permalink to &quot;Groups of sensors&quot;">​</a></h2><p>Sensor groups will allow you to add several sensors with a single entry.</p><h3 id="all-sensors" tabindex="-1">All sensors <a class="header-anchor" href="#all-sensors" aria-label="Permalink to &quot;All sensors&quot;">​</a></h3><p>The <strong>all</strong> group will include all the sensors available for your inverter.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSORS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">all</span></span></code></pre></div><p>Adding all sensors will cause Home Assistant to record a great amount of data, that you might not need. This could lead to a large database and slow down your system. It is especially bad if you are using an SD card for your Home Assistant installation.</p><p>Rather consider using the other groups or selecting the sensors you need.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is <em>not</em> recommended to add <strong>all</strong> sensors for your final system. This is mainly for testing purposes.</p></div><h3 id="energy-management" tabindex="-1">Energy management <a class="header-anchor" href="#energy-management" aria-label="Permalink to &quot;Energy management&quot;">​</a></h3><p>These sensors are mostly related to energy or kWh and required for the Home Assistant <a href="./../guide/energy-management">Energy Management</a></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSORS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">energy_management</span></span></code></pre></div><details class="details custom-block"><summary>Sensors included</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">total_battery_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">total_battery_discharge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">total_grid_export</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">total_grid_import</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">total_pv_energy</span></span></code></pre></div></details><h3 id="power-flow-card-power-flow-card" tabindex="-1">Power flow card: <code>power_flow_card</code> <a class="header-anchor" href="#power-flow-card-power-flow-card" aria-label="Permalink to &quot;Power flow card: \`power_flow_card\`&quot;">​</a></h3><p>These are all sensors used by the <a href="./../examples/lovelace#sunsynk-power-flow-card">Power Flow Card</a></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSORS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">power_flow_card</span></span></code></pre></div><details class="details custom-block"><summary>Sensors included</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">aux_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_current</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_soc</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">battery_voltage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">day_battery_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">day_battery_discharge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">day_grid_export</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">day_grid_import</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">day_load_energy</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">day_pv_energy</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">essential_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">grid_connected</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">grid_ct_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">grid_frequency</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">grid_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">grid_voltage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">inverter_current</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">inverter_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">load_frequency</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">non_essential_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">overall_state</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">priority_load</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pv1_current</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pv1_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pv1_voltage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">use_timer</span></span></code></pre></div></details><h3 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h3><p>Sensors used for changing the System Operating Mode - see <a href="./../examples/lovelace-settings">here</a></p><p>These can be under <code>SENSORS</code> or <code>SENSORS_FIRST_INVERTER</code></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSORS_FIRST_INVERTER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">settings</span></span></code></pre></div><details class="details custom-block"><summary>Sensors included</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">load_limit</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog1_capacity</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog1_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog1_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog1_time</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog2_capacity</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog2_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog2_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog2_time</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog3_capacity</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog3_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog3_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog3_time</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog4_capacity</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog4_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog4_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog4_time</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog5_capacity</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog5_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog5_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog5_time</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog6_capacity</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog6_charge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog6_power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prog6_time</span></span></code></pre></div></details><h3 id="my-sensors" tabindex="-1">My Sensors <a class="header-anchor" href="#my-sensors" aria-label="Permalink to &quot;My Sensors&quot;">​</a></h3><p>All your <a href="./mysensors">custom sensors</a> can be added to the configuration using the <code>mysensors</code> group.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SENSORS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysensors</span></span></code></pre></div>`,38),l=[t];function p(h,r,o,k,d,c){return i(),a("div",null,l)}const F=s(e,[["render",p]]);export{y as __pageData,F as default};
