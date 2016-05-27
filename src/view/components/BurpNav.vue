<template>
  <div class="b-nav">
    <ul id="navList">
      <li
        v-for="item in items"
        :index="$index"
        track-by="$index">
        <a v-link="'/' + item.name">
          <div class="imgwrap">
            <i class="ui-icon ui-icon--{{item.icon}}"></i>
          </div>
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="babel">
export default {
  name: 'BurpNav',
  props: {
    items: {}
  }
}
</script>
