---
title: Dialog 对话框
lang: zh-CN
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 `before-close` 的用法。

dialog/basic-usage

:::

:::tip

`before-close` 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 `footer` 具名插槽里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。

:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。

:::demo

dialog/customization-content

:::

## 自定义头部

`header` 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 `title` 属性，或使用 `titleId` 插槽属性来指定哪些元素应该读取为对话框标题。

:::demo

dialog/customization-header

:::

## 嵌套的对话框

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 `append-to-body` 属性。

:::demo 通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。

dialog/nested-dialog

:::

## 内容居中

标题和底部可水平居中

:::demo 将`center`设置为`true`即可使标题和底部居中。 `center`仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。

dialog/centered-content

:::

:::tip

Dialog 的内容是懒渲染的——在被第一次打开之前，传入的默认 slot 不会被立即渲染到 DOM 上。 因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。

:::

## 居中对话框

从屏幕中心打开对话框。

:::demo 设置 `align-center` 为 `true` 使对话框水平垂直居中。 由于对话框垂直居中在弹性盒子中，所以`top`属性将不起作用。

dialog/align-center

:::

## 关闭时销毁

启用此功能时，默认栏位下的内容将使用 `v-if` 指令销毁。 当出现性能问题时，可以启用此功能。

:::demo 需要注意的是，当这个属性被启用时，在 `transition.beforeEnter` 事件卸载前，除了 `overlay`、`header (可选)`与`footer(可选)` ，Dialog 内不会有其它任何其它的 DOM 节点存在。

dialog/destroy-on-close

:::

## 可拖拽对话框

试着拖动一下`header`部分吧

:::demo 设置`draggable`属性为`true`以做到拖拽

dialog/draggable-dialog

:::

:::tip

当设置 `modal` 属性为 false 时，请将 `append-to-body` 属性设置为 **true**，因为 `Dialog` 是通过 `position: relative` 来确定位置的。一旦移除了 `modal` 属性，`Dialog` 会基于当前的 DOM 元素来进行定位， 而不是基于 `document.body`，这会导致样式问题。

:::

## 属性

| 属性名                        | 说明                                                                                            | 类型                                  | 可选值 | 默认值 |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------- | ------ | ------ |
| model-value / v-model         | 是否显示 Dialog                                                                                 | boolean                               | —      | —      |
| title                         | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入                                  | string                                | —      | —      |
| width                         | Dialog 的宽度                                                                                   | string / number                       | —      | 50%    |
| fullscreen                    | 是否为全屏 Dialog                                                                               | boolean                               | —      | false  |
| top                           | Dialog CSS 中的 margin-top 值                                                                   | string                                | —      | 15vh   |
| modal                         | 是否需要遮罩层                                                                                  | boolean                               | —      | true   |
| append-to-body                | Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true                   | boolean                               | —      | false  |
| lock-scroll                   | 是否在 Dialog 出现时将 body 滚动锁定                                                            | boolean                               | —      | true   |
| custom-class<DeprecatedTag /> | Dialog 的自定义类名                                                                             | string                                | —      | —      |
| open-delay                    | Dialog 打开的延时时间，单位毫秒                                                                 | number                                | —      | 0      |
| close-delay                   | Dialog 关闭的延时时间，单位毫秒                                                                 | number                                | —      | 0      |
| close-on-click-modal          | 是否可以通过点击 modal 关闭 Dialog                                                              | boolean                               | —      | true   |
| close-on-press-escape         | 是否可以通过按下 ESC 关闭 Dialog                                                                | boolean                               | —      | true   |
| show-close                    | 是否显示关闭按钮                                                                                | boolean                               | —      | true   |
| before-close                  | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候. | Function(done) (done 用来关闭 Dialog) | —      | —      |
| draggable                     | 为 Dialog 启用可拖拽功能                                                                        | boolean                               | —      | false  |
| center                        | 是否让 Dialog 的 header 和 footer 部分居中排列                                                  | boolean                               | —      | false  |
| align-center                  | 是否水平垂直对齐对话框                                                                          | boolean                               | —      | false  |
| destroy-on-close              | 当关闭 Dialog 时，销毁其中的元素                                                                | boolean                               | —      | false  |

:::warning

`custom-class` 已被 **弃用**, 之后 **将会被** 移除到 <VersionTag version="2.3.0" />, 请使用 `class`.

:::

## 插槽

| 插槽名                 | 说明                                                   |
| ---------------------- | ------------------------------------------------------ |
| —                      | Dialog 的内容                                          |
| header                 | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| title<DeprecatedTag /> | 与 header 作用相同 请使用 header                       |
| footer                 | Dialog 按钮操作区的内容                                |

## 事件

| 事件名           | 说明                               | 参数 |
| ---------------- | ---------------------------------- | ---- |
| open             | Dialog 打开的回调                  | —    |
| opened           | Dialog 打开动画结束时的回调        | —    |
| close            | Dialog 关闭的回调                  | —    |
| closed           | Dialog 关闭动画结束时的回调        | —    |
| open-auto-focus  | 输入焦点聚焦在 Dialog 内容时的回调 | —    |
| close-auto-focus | 输入焦点从 Dialog 内容失焦时的回调 | —    |

## 常见问题解答（FAQ）

#### 在 SFC 文件中使用对话框，scope 样式不会生效。

典型议题：[#10515](https://github.com/element-plus/element-plus/issues/10515)

PS：既然对话框是使用 `Teleport` 渲染的，建议在全局范围写入根节点的样式。

#### 当对话框被显示及隐藏时，页面元素会来回移动（抖动）。

典型议题：[#10481](https://github.com/element-plus/element-plus/issues/10481)

PS：建议将滚动区域放置在一个挂载的 vue 节点，如 `<div id="app" />` 下，并对 body 使用 `overflow: hidden` 样式。
