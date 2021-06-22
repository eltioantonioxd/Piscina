<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Daily Sales</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div> -->
      <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Email Subscription</h4>
            <p class="category">
              Last Campaign Performance
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 10 days ago
            </div>
          </template>
        </chart-card>
      </div> -->
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="orange"
          ref="test"
        >
          <template slot="content">
            <h4 class="title">Clima</h4>
            <p class="category">
              Clima durante el día
            </p>
          </template>

          <!-- <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              campaign sent 26 minutes ago
            </div>
          </template> -->
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>thermostat</md-icon>
          </template>

          <template slot="content">
            <p class="category">Temperatura</p>
            <h3 class="title">{{ this.info.temperatura }} °C</h3>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="white">
          <template slot="header">
            <md-icon>science</md-icon>
          </template>

          <template slot="content">
            <p class="category">Alcalinidad</p>
            <h3 class="title">
              {{ this.info.ph }}
              <small>pH</small>
              <br />
              <div class="switch-div">
                <small class="switch-desc">Activar filtro</small>
                <md-switch
                  type="checkbox"
                  class="my-switch"
                  v-model="this.info.filtro"
                  @change="
                    () => {
                      this.info.filtro = !this.info.filtro;
                    }
                  "
                />
              </div>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <!-- <md-icon>date_range</md-icon> -->
              <!-- <p class="category">
                Activar filtro:
                <md-switch type="checkbox" />
              </p> -->
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <!-- <md-icon>info_outline</md-icon> -->
            <md-icon>height</md-icon>
          </template>

          <template slot="content">
            <p class="category">Altura</p>
            <h3 class="title">
              {{ this.info.distancia / 100 }} <small>m</small>
              <br />
              <div class="switch-div">
                <small class="switch-desc">Activar llenado</small>
                <md-switch
                  type="checkbox"
                  class="my-switch"
                  v-model="this.info.llenado"
                  @change="
                    () => {
                      this.info.llenado = !this.info.llenado;
                    }
                  "
                />
              </div>
            </h3>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard, ChartCard } from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard
  },
  mounted() {
    fetch("http://localhost:3000/get100Values/1")
      .then(res => res.json())
      .then(data => {
        data = data[data.length - 1];
        this.info.ph = data.ph;
        this.info.temperatura = data.temperatura;
        this.info.distancia = data.distancia;
        this.info.movimiento = data.movimiento;
      })
      .then(() => console.log(this.info));

    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=-33.44&lon=-71&appid=0aa2de9af3ac907af812454098343952&units=metric"
    )
      .then(res => res.json())
      .then(data => {
        const newTimes = data.hourly
          .map(x => `${new Date(x.dt * 1000).getHours()}:00`)
          .slice(0, 12);
        const newWeather = data.hourly.map(x => x.temp).slice(0, 12);

        this.dataCompletedTasksChart.data = {
          labels: newTimes,
          series: [newWeather]
        };

        const options = {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: Math.min(newWeather) - 1,
          high: Math.max(newWeather) + 1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        };

        console.log(this.$refs.test);
        this.$refs.test.chartistInstance.update(
          this.dataCompletedTasksChart.data,
          options
        );

        // setInterval(() => {
        //   fetch("http://localhost:3000/alert")
        //     .then(res => res.json())
        //     .then(data => {
        //       // console.log(data);
        //       if (data.alertMov) {
        //         console.error("ALERTA");
        //       }
        //     });
        // }, 500);
      });
  },
  data() {
    return {
      info: {
        ph: null,
        temperatura: null,
        movimiento: null,
        filtro: false,
        llenado: false
      },
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[0, 5, 15, 10, 20, 25, 30, 10]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  }
};
</script>

<style scoped>
.switch-desc {
  font-size: 12px !important;
  margin-right: 10px;
}
.switch-div {
  display: flex;
  justify-content: flex-end;
  /* align-content: center; */
  align-items: center;
}
.my-switch {
  margin: 10px 0 !important;
}
</style>
