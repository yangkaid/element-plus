---
title: Badge 徽章
lang: zh-CN
---

# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

可以用来展示新消息的数量。

:::demo The amount is defined with value which accepts Number or String.

badge/basic

:::

## 最大值

你还可以自定义最大值

:::demo The max value is defined by property max which is a Number. Note that it only works when value is also a Number.

badge/max

:::

## 自定义显示内容

你也可以展示除数字以外你想要展示的任何值。

:::demo When value is a String, it can display customized text.

badge/customize

:::

## 小红点

通过一个小红点标记来告知用户有新内容。

:::demo 使用 `is-dot` 属性。 It is a Boolean.

badge/dot

:::

## API

### Attributes

| 属性名 | 说明                                                                 | 类型                                                               | 默认值 |
| ------ | -------------------------------------------------------------------- | ------------------------------------------------------------------ | ------ |
| value  | 显示值                                                               | ^[string] / ^[number]                                              | ''     |
| max    | 最大值，超过最大值会显示 `{max}+`。 Only works if value is a number. | ^[number]                                                          | 99     |
| is-dot | 是否显示小圆点。                                                     | ^[boolean]                                                         | false  |
| hidden | 是否隐藏 Badge。                                                     | ^[boolean]                                                         | false  |
| type   | badge 类型。                                                         | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | danger |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
