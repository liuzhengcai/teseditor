---
eid: CreateConnectionTaskCard
title: 创建连线任务卡

---

创建连线任务卡，主要介绍开发连线类型任务卡，本章节需要一定的前提基础。

> 确定开发环境是否满足([开发要求 | TES 开发平台 (liuzhengcai.github.io)](https://liuzhengcai.github.io/teseditor/docs/DevelopmentRequirements))

## 进入开发平台[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#进入开发平台)

地址链接：https://assistant.es-online.com.cn/lzctest/teseditor/index.html 开发平台如下图：

![image-20201030142318787](https://liuzhengcai.github.io/teseditor/assets/images/20201112102444-aaf44da540baf5acc3ccaa3f2a0e4582.jpg)

## 添加任务卡[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#添加任务卡)

![img](https://liuzhengcai.github.io/teseditor/assets/images/lxchuangjian-3f260e8246b1c2c8310f06ff7036b193.png)

输入任务卡名称，点击**`“保存”`** ；

![img](https://liuzhengcai.github.io/teseditor/assets/images/lxjcard-67f0df6c8ce7531623be89df064a5acf.png)

等待弹出**`“保存TES List完毕”`**通知，点击**`“确定”`**，新的任务卡创建完毕；

![img](https://liuzhengcai.github.io/teseditor/assets/images/lxming-416ca4a8b65e1c420f3bb3693cf71cf9.png)

### 位置与尺寸[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#位置与尺寸)

在这个环节，我们所了解的是图元的**`“尺寸”`**和它的**`“位置”`**。

- 根据**`X`**、**`Y`**轴定义图元位置，而**`xsi`**、**`ysi`**则是定义图像大小。

- 且图元长宽必须为**`80`**。

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/20201112104330-e6c3f7b1d2df728381493e35ed3eb8e3.jpg)

### 添加背景[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#添加背景)

- 点击**`“背景”`**，在上传图片区域快选择你想要背景并上传。

> ps：在这个环节是需要保存操作的，否则背景不会被保存，且图片大小不能超过100kb。

> 图片是在此环节上传用于图元背景，选择好的背景会在图元上显示。

![img](https://liuzhengcai.github.io/teseditor/assets/images/lxbeijing-5e1f95ebc0330f667fac398ff44ac022.png)

### 添加图元[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#添加图元)

- 操作步骤，依次添加**`“答案”`**、**`“重置”`**、**`“提交”`**；

  - 添加步骤：选中空白图元，点击**`“添加图元”`**，选中**`“Browse”`**，选择**`“本地素材”`**；

  - **`“答案”`**、**`“重置”`**尺寸为**`“50X50”`**；**`提交`**，尺寸为**`“180X40”`**；

    ![img](https://liuzhengcai.github.io/teseditor/assets/images/lxtuyuan-43a5c5f572a58ba906286107b7a01488.png)

### 添加连线区域[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#添加连线区域)

添加**`“连线区域”`**；

- 添加步骤：选中空白图元，点击**`“添加图元”`**，选中**`“Browse”`**，选择**`“本地素材”`**；

- **`“连线区域”`**将图元类型设置为连线图元；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/lxquyu-ccd9aecfaff8fae12eebfb05d592eba2.png)

- 添加连线提示:连线提示用于限制连接次数；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/lxtishi-12ccb448ed17d7f0bf984a3c87b38ba6.png)

### 添加可放置图元[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#添加可放置图元)

- 操作步骤，依次添加**`“可放置的图元”`**，如**`“加热器”`**、**`“回流泵”`**等；
  - 添加步骤：选中空白图元，点击**`“添加图元”`**，选中**`“Browse”`**，选择**`“本地素材”`**；

## 增加代码[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#增加代码)

完成资源添加后，最后再完成代码积木搭接，就可以查看效果与预览了。

### 增加重置代码[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#增加重置代码)

- 选择资源列表，点选重置图元

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djcz-9805b1723d2577b37d81b6b730bfd1b1.png)

- 选择代码列表，点击图元，将其中的重置按钮，拖入代码预览窗口；

![img](https://liuzhengcai.github.io/teseditor/assets/images/djcztuyuan-795212b57e8570574f8063ec7d445542.png)

- 点击资源，选择保存卡片，完成重置代码积木的搭接；

### 增加连线区域代码[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#增加连线区域代码)

- 选择连线区域图元，点击代码，进入代码编辑界面

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djlxquyu-1f9b974f3a3acd0bb33a401a92baf2e3.png)

- 点击图元模块，选择图元积木移入列表，拖入开发预览窗口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djlxtuyuan-7fea8a862f36cb9475ebee56ead9d913.png)

- 点击文本模块，选择自定义文本积木，拖入图元积木移入列表接口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djlxwenben-2abeb6b91c90400bf8df4fc4f5dcaf9a.png)

- 在文本模块，输入自定义命名的可放置图元名称，复制积木块，继续增加其他可放置图元；

### 增加提交代码[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#增加提交代码)

- 选择提交图元，点击代码，进入代码编辑界面

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djtj-6a10a235566df3b0f3a2886c07532135.png)

- 点击提交模块，选择逻辑积木，拖入开发预览窗口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djtjluoji-896d87fcb9510de42e9543d051da0a78.png)

- 点击文本模块，选择自定义文本积木，拖入文本积木移入列表接口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djtjwenben-145f20a148e0578b810eddf9877155da.png)

- 点击图元模块，选择图元积木，拖入开发预览窗口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djtjtuyuan-c6a12c2af577bae99b0f9540cc1b83d1.png)

- 点击数字模块，选择自定义数字积木，拖入文本列表中；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djtjshuxue-3a144895ff0b60a481a0effc6e148455.png)

### 增加答案代码[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#增加答案代码)

- 选择答案图元，点击代码，进入代码编辑界面

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/20201112104245-b9a7054f4197da4865211d5e2727ce58.jpg)

- 点击提交模块，选择逻辑积木，拖入开发预览窗口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/20201112104311-e23542b7d062b631212cb37e56e83276.jpg)

- 点击文本模块，选择自定义文本积木，拖入文本积木移入列表接口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/20201112104256-b2a3f960c58e3ef000d8b6fa2178b390.jpg)

- 点击图元模块，选择图元积木，拖入开发预览窗口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/image-20201113164506096-799d27f76466ce1118132b58702231f3.png)

### 增加背景代码[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#增加背景代码)

- 选择背景图元，点击代码，进入代码编辑界面

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djbeijing-ce7b1fb3bdf5afe8bf1ca837e1600a15.png)

- 点击代码模块，选择逻辑积木，拖入开发预览窗口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djbjluoji-306a264cb7cfc7fd5e1ae675b31431fc.png)

- 点击文本模块，选择自定义文本积木，拖入文本积木移入列表接口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djbjwenben-1e0dc40bb13e3a1bd857720351744a18.png)

- 点击图元模块，选择图元积木，拖入开发预览窗口；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djbjtuyuan-9903dac1ddc08c76c6892ffd4cddd605.png)

## 预览与调整[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#预览与调整)

**`“预览”`**就是欣赏劳动成果并对此进行点评及其修改，从而达到完善。

![img](https://liuzhengcai.github.io/teseditor/assets/images/yulan-27afbe28cb6a0e8559f618c3983b0d17.jpg)

## 发布[#](https://liuzhengcai.github.io/teseditor/docs/lxcard#发布)

- 点击保存卡片

  ![img](data:image/png;base64,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)

- 点击我的tes

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/image-20201111154624724-fa905d009bab97c5b8e60db08f6c1ce8.png)

- 找到对应的工程，点击发布

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/lxming-416ca4a8b65e1c420f3bb3693cf71cf9.png)

- 点击发布运行

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/djfabu-8b1c594671a847daf7a115a4efd0917b.png)

- 发布效果如下：

  - 发布至ESCC，请参阅[发布到ESCC](https://liuzhengcai.github.io/teseditor/docs/ReleaseToESCC)；
  - 其他，请耐心等待或联系zl；

  ![img](https://liuzhengcai.github.io/teseditor/assets/images/dj-4758b69b09809af4bc8c5c6a9118043c.png)
