<template>
  <div>
    <ui5-shellbar
      profile="https://sap.github.io/ui5-webcomponents/www/samples/images/woman_avatar_5.png"
      primary-title="Global Business Systems"
      secondary-title="secondary title"
      logo="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
    ></ui5-shellbar>

    <ui5-list id="myList" class="full-width">
      <ui5-li
        icon="sap-icon://nutrition-activity"
        type="Active"
        description="Tropical plant with an edible fruit"
      >Pineapple</ui5-li>
      <ui5-li
        icon="sap-icon://nutrition-activity"
        type="Active"
        description="Occurs between red and yellow"
      >Orange</ui5-li>
      <ui5-li
        icon="sap-icon://nutrition-activity"
        type="Active"
        description="The yellow lengthy fruit"
      >Banana</ui5-li>
      <ui5-li
        icon="sap-icon://nutrition-activity"
        type="Active"
        description="The tropical stone fruit"
      >Mango</ui5-li>
    </ui5-list>

    <ui5-tabcontainer class="full-width" show-overflow>
      <ui5-tab text="Tab 1">
        <ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
      </ui5-tab>
      <ui5-tab icon="sap-icon://activities" text="Tab 2" selected>
        <ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>
      </ui5-tab>
      <ui5-tab icon="sap-icon://add" text="Tab 3">
        <ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>
      </ui5-tab>
      <ui5-tab icon="sap-icon://calendar" text="Tab 4">
        <ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>
      </ui5-tab>
      <ui5-tab-separator></ui5-tab-separator>
      <ui5-tab icon="sap-icon://action-settings" text="Tab 5">
        <ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>
      </ui5-tab>
    </ui5-tabcontainer>
  </div>
</template>

<style>
.medium {
  margin: 0;
  padding: 0;
}
.card-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>

