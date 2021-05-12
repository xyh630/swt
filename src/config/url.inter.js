/**
 * 接口地址
 */
// const baseurl = "http://localhost:8080/";

const baseurl = "http://106.54.128.134:8080/";

const inter = {
    urlAndress:`${baseurl}`,
    //初始化数据
    init: `${baseurl}../../dept/init`,

    //首页工单数据
    getWorkOrderInfo: `${baseurl}../../dept/gdData`,

    //首页计量抄通数据
    getMetingInfo: `${baseurl}../../dept/jlctData`,

    //首页今日线损数据
    getXSInfo: `${baseurl}../../dept/xsData`,

    //首页业扩新装数据
    getBusinessInfo: `${baseurl}../../dept/ykxzData`,

    //首页其他数据
    getOthersInfo: `${baseurl}../../dept/initDayData`,

    // 停电工单
    getWorkOrderList: `${baseurl}../../dian_cai_ting_dian_shi_bai/sPageList`,

    // 抢修工单001、咨询工单003、投诉工单005
    getRepairList: `${baseurl}../../gong_fu_qiang_xiu_gong_dan/sPageList`,

    // 计量抄通
    getMetingUserList: `${baseurl}../../dian_cai_wei_chao_tong/sPageList`,


    getMetingAreaList: `${baseurl}../../dian_cai_wei_chao_tong/getSheJiTaiQuShuData`,

    // 未完成业扩新装
    getBusinessList: `${baseurl}../../ying_xiao_ye_kuo_xin_zhuang_order/sPageList`,

    // 已完成业扩工单
    getBusinessDoneList: `${baseurl}../../ying_xiao_ye_kuo_xin_zhuang_order_list/sPageList`,

    //重过载
    getAbnormalAreaFirstList: `${baseurl}../../pb_zhong_guo_zai/sPageList`,

    //三项不平衡
    getAbnormalAreaSecondList: `${baseurl}../../pb_san_xiang_bu_ping_heng/sPageList`,

    //低电压
    getAbnormalAreaThirdList: `${baseurl}../../pb_di_dian_ya/sPageList`,

    //经营情况
    getOperating: `${baseurl}../../zhong_ya_xian_sun_lv/getJingYingQingKuangData`,

    //基础保障
    getProtection: `${baseurl}../../dian_cai_wei_chao_tong/getJiChuBaoZhangData`,

    //投诉
    getComplaint: `${baseurl}../../gong_fu_tou_su_ci_shu/getTouSuDetail`,

    //抢修
    getRepair: `${baseurl}../../gong_fu_tou_su_ci_shu/getQiangXiuDetail`,

    //获取欠费用户明细
    getArrearsUserList: `${baseurl}../../ying_xiao_qian_fei_hui_zong_detail/sPageList`,

    getAllTaiQuRank: `${baseurl}../../ying_xiao_qian_fei_hui_zong_detail/getAllTaiQuRank`,

    //中压线损
    getZyxs: `${baseurl}../../zhong_ya_xian_sun_lv/sPageList`,

    //台区线损
    getTqxs: `${baseurl}../../dian_cai_tai_qu_xian_sun/sPageList`,

    //获取95598 用户列表
    getUserList: `${baseurl}../../gong_fu_tou_su_ci_shu/getYongHuMingXiData`,

    // //获取供电所员工列表

    // getStaffList: `${baseurl}../../staff/dgList`,

    // //供电所员工二级页面
    // getStaffInfo: `${baseurl}../../staff/dgData`,

    //供电所组织机构
    getDeptInfo: `${baseurl}../../dept/getDeptInfo`,

    //复电失败
    getFdList: `${baseurl}../../dian_cai_fu_dian_shi_bai/sPageList`,

    //更新今日数据
    updateData: `${baseurl}../../dept/updateData`,

    //导出今日中压线损Excel
    loadZyxsExcelAll: `${baseurl}../../zhong_ya_xian_sun_lv/excelAll`,

    //导出今日台区线损Excel
    loadTqxsExcelAll: `${baseurl}../../dian_cai_tai_qu_xian_sun/excelAll`,

    //获取供电所员工数据
    getStaffList: `${baseurl}../../staff/dgList`,

    //获取供电所员工详情数据
    getStaffDetail:`${baseurl}../../staff/dgData`,

    //供电所员工二级页面
    //未抄通
    getWCTList:`${baseurl} ../../dian_cai_wei_chao_tong/sPageList`,

    //欠费用户
    getQFList:`${baseurl} ../../ying_xiao_qian_fei_hui_zong_detail/sPageList`,

    //高损&负损
    getGFSList:`${baseurl} ../../dian_cai_tai_qu_xian_sun/sPageList`,

    //所辖台区
    getSXTQList:`${baseurl} ../../dian_cai_tai_qu_fu_ze_ren/sPageList`,

    //员工信息列表导出excel
    exportStffExcel:`${baseurl} ../../staff/dgExcel`,
    //供电所业务系统账号 列表
    getAccessAcountList:`${baseurl} ../../access_account/list`,
    
    //供电所业务账号 增加
    addAccessAcount:`${baseurl} ../../access_account/save`,

    //供电所业务账号 修改
    editAccessAcount:`${baseurl} ../../access_account/update`,
    
    //供电所业务账号 删除
    delAccessAcount:`${baseurl} ../../access_account/del`,

    //供电所基本信息 查看
    viewDeptInfo:`${baseurl} ../../dept/viewByGdsId`,

    //供电所基本信息 修改
    editDeptInfo:`${baseurl}../../dept/update`,

    //供电所员工 列表
    getStaffPageList:`${baseurl} ../../staff/sPageList`,

    //供电所员工 添加
    addStaff:`${baseurl} ../../staff/save`,

    //供电所员工 修改
    editStaff:`${baseurl} ../../staff/update`,

    //供电所员工删除
    delStaff:`${baseurl} ../../staff/del`,

    //供电所员工上传头像
    uploadHeaderImg:`${baseurl} ../../staff/upload`,

    //版本信息
    getVersion:`${baseurl} ../../dept/getDeptInfo`,

    //停电
    getTingDianList:`${baseurl}../../big_data_xian_lu_ting_dian/sPageList`
};

module.exports = inter,baseurl;
