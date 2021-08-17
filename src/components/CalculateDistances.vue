<template>
    <div class="calculate-distances-root px-2 md:px-0">
        <div class="bg-white">
            <div class="max-w-7xl mx-auto py-1 px-1 sm:py-8 sm:px-6 lg:px-8">
                <div class="text-center">
                    <p class="mt-1 text-xl font-semibold text-gray-600 sm:text-3xl sm:tracking-tight lg:text-4xl">
                        Conqueror Challenges
                    </p>
                    <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Activity Conversion Calculator
                    </p>
                    <p class="max-w-xl mt-5 mx-auto text-lg text-gray-500">
                        Use the form below to convert time spent exercising into miles and km
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div
                class="bg-white py-8 px-4 shadow md:shadow-xl sm:rounded-lg sm:px-10 border border-gray-200"
                :class="{'active-shadow': active}"
            >
                <div class="mb-4">
                    <label for="activity" class="block text-sm font-medium text-gray-700">
                        Activity
                    </label>
                    <select id="activity" name="activity" v-model="selectedActivity"
                            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none
                                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option :key="activity.id" v-for="activity in activities" :value="activity.id">
                            {{ activity.type }}
                        </option>
                    </select>
                </div>

                <div>
                    <label for="duration" class="block text-sm font-medium text-gray-700">
                        Duration (in mins)
                    </label>
                    <div class="mt-1">
                        <input id="duration" name="duration" type="text" pattern="\d*" maxlength="5"
                               v-model="duration"
                               v-on:keyup="checkIsNumber"
                               required
                               class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                   shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500
                                   focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>
                <div>
                    <div class="mt-10">
                        <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                            <div class="border-t-2 border-gray-100 pt-6">
                                <dt class="text-base font-medium text-gray-500">Miles</dt>
                                <dd class="text-3xl font-extrabold tracking-tight"
                                    :class="{'text-gray-200': result.isGrayed, 'text-gray-900': !result.isGrayed}"
                                >
                                    {{ result.miles }}
                                </dd>
                            </div>

                            <div class="border-t-2 border-gray-100 pt-6">
                                <dt class="text-base font-medium text-gray-500">Kilometres</dt>
                                <dd class="text-3xl font-extrabold tracking-tight"
                                    :class="{'text-gray-200': result.isGrayed, 'text-gray-900': !result.isGrayed}"
                                >
                                    {{ result.km }}
                                </dd>
                            </div>

                            <div class="border-t-2 border-gray-100 pt-6">
                                <dt class="text-base font-medium text-gray-500">Duration</dt>
                                <dd class="text-3xl font-extrabold tracking-tight"
                                    :class="{'text-gray-200': result.isGrayed, 'text-gray-900': !result.isGrayed}"
                                >
                                    {{ result.duration }}
                                </dd>
                            </div>

                            <div class="border-t-2 border-gray-100 pt-6">
                                <dt class="text-base font-medium text-gray-500">Activity</dt>
                                <dd class="text-3xl font-extrabold tracking-tight"
                                    :class="{'text-gray-200': result.isGrayed, 'text-gray-900': !result.isGrayed}"
                                >
                                    {{ result.activity }}
                                </dd>
                            </div>
                        </dl>
                        <button
                            v-if="active"
                            type="button"
                            class="flex items-center justify-center mt-2 px-3 py-2 border border-transparent shadow-sm text-sm
                            leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full
                            text-center"
                            @click="resetForm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002
                                      5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0
                                      011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2
                                      0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8 w-full sm:mx-auto text-center">
            <p class="max-w-xl mt-5 mx-auto text-sm text-gray-400 text-bold">
                Converter made by <a href="https://centralblue.co.uk/" class="text-blue-400" target="_blank">Simon
                Rogers</a>,
                a <a href="https://github.com/midnite81" class="text-blue-400" target="_blank">software engineer</a>,
                from the United Kingdom.
            </p>
            <p class="max-w-xl mt-1 mx-auto text-sm text-gray-400 text-bold">
                The
                <a href="https://github.com/midnite81/conqueror-conversions" class="text-blue-400" target="_blank">
                    source code
                </a>
                can be viewed on github
            </p>
            <p class="max-w-xl mt-1 mx-auto text-sm text-gray-400 text-bold">
                This is not an official Conqueror Challenges application.
            </p>
            <div class="max-w-xl mt-1 mb-3 mx-auto text-sm text-gray-400 text-normal">
                Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a>
                from <a href="https://www.flaticon.com/" title="Flaticon" class="text-blue-400" target="_blank">www.flaticon.com</a>
            </div>

        </div>
    </div>
</template>

<script>
import data from "../../lib/data";

export default {
    name: "CalculateDistances",

    computed: {
        active() {
            return typeof this.currentActivity !== 'undefined'
                && this.currentActivity.id !== 0
                && this.duration.length > 0
                && !isNaN(this.duration)
        },

        currentActivity() {
            return data.find(item => item.id === this.selectedActivity);
        },

        result() {
            let activity = this.currentActivity;
            let duration = isNaN(this.duration)
                ? ''
                : this.duration.substr(0, 4) + (parseInt(this.duration) === 1 ? ' minute' : ' minutes');

            if (typeof activity !== "undefined" && activity.id > 0) {
                return {
                    'isGrayed': false,
                    'miles': (activity.milePerMin * this.duration).toFixed(2).substr(0, 10),
                    'km': (activity.kmPerMin * this.duration).toFixed(2).substr(0, 10),
                    'duration': duration,
                    'activity': this.currentActivity.shortType,
                };
            }

            return {
                'isGrayed': true,
                'miles': "-",
                'km': "-",
                'duration': "-",
                'activity': "-",
            };
        }
    },

    data() {
        return {
            activities: data,
            selectedActivity: 0,
            duration: ''
        }
    },

    methods: {
        resetForm() {
            this.duration = '';
            this.selectedActivity = 0;
        },

        checkIsNumber() {
            this.duration = this.duration.replace(/\D/g, '');
        }
    }
}
</script>

<style scoped>
.active-shadow {
    border-color: #c7cdf5 !important;
}

@media (min-width: 768px) {
    .active-shadow {
        --tw-shadow: 0 15px 20px -3px rgba(49, 78, 255, 0.1), 0 4px 6px -2px rgba(49, 78, 255, 0.05);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #314EFF), var(--tw-ring-shadow, 0 0 #314EFF), var(--tw-shadow);
    }
}
</style>
