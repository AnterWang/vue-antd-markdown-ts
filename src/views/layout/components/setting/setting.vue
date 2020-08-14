<template>
  <div class="side-setting">
    <setting-item :title="$t('theme.title')">
      <img-checkbox-group
        @change="setTheme"
        :default-values="[layoutTheme]"
      >
        <img-checkbox :title="$t('theme.dark')" img="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" value="dark"/>
        <img-checkbox :title="$t('theme.light')" img="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" value="light"/>
        <img-checkbox :title="$t('theme.night')" img="https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg" value="night"/>
      </img-checkbox-group>
    </setting-item>
    <setting-item :title="$t('theme.color')">
      <color-checkbox-group
        @change="setPalettes"
        :defaultValues="[palettes.indexOf(activeTheme)]" :multiple="false"
      >
        <color-checkbox v-for="(color, index) in palettes" :key="index" :color="color" :value="index" />
      </color-checkbox-group>
    </setting-item>
    <a-divider/>
    <setting-item :title="$t('navigate.title')">
      <img-checkbox-group
        @change="setLayout"
        :default-values="[layout]"
      >
        <img-checkbox :title="$t('navigate.side')" img="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" value="side"/>
        <img-checkbox :title="$t('navigate.head')" img="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" value="head"/>
      </img-checkbox-group>
    </setting-item>
    <setting-item>
      <a-list :split="false">
        <a-list-item>
          {{$t('navigate.fixedHeader')}}
          <a-switch :checked="fixedHeader" slot="actions" size="small" @change="setFixedHeader" />
        </a-list-item>
        <a-list-item>
          {{$t('navigate.fixedSideBar')}}
          <a-switch :checked="fixedSideBar" slot="actions" size="small" @change="setFixedSideBar" />
        </a-list-item>
      </a-list>
    </setting-item>
    <a-divider />
    <setting-item :title="$t('other.title')">
      <a-list :split="false">
        <a-list-item>
          {{$t('other.weekMode')}}
          <a-switch :checked="weekMode" slot="actions" size="small" @change="setWeekMode" />
        </a-list-item>
      </a-list>
    </setting-item>
  </div>
</template>

<script>
import SettingItem from './settingItem'
import {ColorCheckbox, ImgCheckbox} from './checkbox'
import { mapState, mapMutations } from 'vuex'
import { updateTheme } from '@/utils/theme'
const ColorCheckboxGroup = ColorCheckbox.Group
const ImgCheckboxGroup = ImgCheckbox.Group
export default {
  name: 'Setting',
  i18n: require('./i18n'),
  components: {ImgCheckboxGroup, ImgCheckbox, ColorCheckboxGroup, ColorCheckbox, SettingItem},
  data() {
    return {
      activeTheme: '#1890FF'
    }
  },
  computed: {
      ...mapState('setting', ['layoutTheme', 'layout', 'palettes', 'weekMode', 'fixedHeader', 'fixedSideBar']),
  },
  methods: {
    // ...mapMutations('setting', ['setTheme', 'setWeekMode',
    //   'setFixedSideBar', 'setFixedHeader', 'setHideSetting']),
      setTheme(val){
        console.log(val)
      },
      setPalettes(val){
        console.log(val[0])
        this.activeTheme = this.palettes[val[0]]
        updateTheme(this.activeTheme)
      },
      setLayout(val){
        
      },
      setFixedHeader(val){

      },
      setFixedSideBar(val){

      },
      setWeekMode(){
        
      }
  }
}
</script>

<style lang="less" scoped>
  .side-setting{
    min-height: 100%;
    background-color: var(--setting-bg-color);
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    position: relative;
    .flex{
      display: flex;
    }
    .select-item{
      width: 80px;
    }
  }
</style>
