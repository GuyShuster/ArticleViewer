/*
* A component that represents an article section
* Author: Guy Shuster
* Date: 2/2/2021
* */

Vue.component('article-section', {
    props: ['parentId','sectionId', 'sectionHeading'],
    data() {
        return {
            hidden: true
        };
    },
    template: `
        <div class="accordion-item">
            <h2 class="accordion-header" :id="'heading-'+sectionId">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'collapse-'+sectionId" aria-expanded="true" 
                        :aria-controls="'collapse-'+sectionId"
                        @click="showOrHide()">
                        {{sectionHeading}}
                </button>
            </h2>
            <div :id="'collapse-'+sectionId" class="accordion-collapse" :aria-labelledby="'heading-'+sectionId"
                 :data-bs-parent="'#'+parentId"
                 :class="{collapse: hidden}">
                <div class="accordion-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    `,
    methods: {
        showOrHide() {
            this.hidden = !this.hidden;
        }
    }
});

const vueApp = new Vue({
    el: '#app',
});
